const mongoose = require("mongoose");
const path = require("path");
const NodeCache = require("node-cache");
const service = require("./services")
const Course = require("./models/course")
const express = require("express");

require("dotenv").config({
  path: path.join(__dirname) + "/.env",
});
const connection = mongoose.connect(process.env.MONGO_Admin ,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}
).then(() => {
   console.log("Connected Succesfully ...")
});

const app = express();
const cache = new NodeCache({ stdTTL: 3 ,maxKeys:2 ,checkperiod:1});

obj = { my: "Special", variable: 42 };
obj1 = { my: "Special", variable: 42 };

success = cache.set( "myKey", obj );
success = cache.set( "myKey", obj1 );


app.get("/", (req, res) => {
    return res.json({ message: "Hello world" });
  });
  
 
app.listen("4001",()=>{
    console.log("4001" + " is the magic port");
  });
  


const verifyCache = (req, res, next) => {
    try {
      const  id = req.params.id;
      if (cache.has(id)) {
        return res.status(200).json(cache.get(id));
      }
      return next();
    } catch (err) {
       
        return res.status(400).json({
            error:err,
        });
    }
  };

  app.get("/getCourse/:id", verifyCache, async (req, res) => {
    try {
      const id = req.params.id;
      const  data  = await service.getCourse(req.params.id)
      let mykeys = cache.keys();
       let len = mykeys.length;
       if(len>2){
       value = cache.del( mykeys[len-1]);
       }
     
      cache.set(id, data , 1); // also added this line
     
      return res.status(200).json({       
        "data": data,
    });
    } catch (error) {
        return res.status(400).json({
            error:error.message,
        });
    }
  });

  app.get("/list", verifyCache, async (req, res) => {
    try {
      const id = req.params.id;
      const  data  = await service.listCourse()
      let mykeys = cache.keys();
       let len = mykeys.length;
       if(len>2){
       value = cache.del( mykeys[len-1]);
       }
     
      cache.set("102", data ); // also added this line
     
      return res.status(200).json({       
        "data": data,
    });
    } catch (error) {
        return res.status(400).json({
            error:error.message,
        });
    }
  });