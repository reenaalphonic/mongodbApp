const express = require("express");
const Redis = require("ioredis");
const mongoose = require("mongoose");
const path = require("path");
const service = require("./services")
const Course = require("./models/course")

const app = express();
const redis = new Redis();

require("dotenv").config({
    path: path.join(__dirname) + "/.env",
  });
  const connection = mongoose.connect(process.env.MONGO_Admin ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }
  ).then(() => {
     console.log("mongoose Connected Succesfully ...")
  });
  
  app.get("/", (req, res) => {
    return res.json({ message: "Hello world " });
  });
  
 
app.listen("4002",()=>{
    console.log("4002" + " is the magic port");
  });

const cache = (req, res, next) => {
  const { id } = req.params;
  redis.get(id, (error, result) => {
    if (error) throw error;
    if (result !== null) {
      return res.json(JSON.parse(result));
    } else {
      return next();
    }
  });
};




  app.get("/getCourse/:id", cache, async (req, res) => {
    try {
      const id = req.params.id;
      const  data  = await service.getCourse(req.params.id)
      redis.set(id, JSON.stringify(data), "ex", 15);
     
      return res.status(200).json({       
        "data": data,
    });
    } catch (error) {
        return res.status(400).json({
            error:error,
        });
    }
  });