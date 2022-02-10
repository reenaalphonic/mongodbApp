const mongoose = require("mongoose");
const path = require("path");

const service = require("./services")
require("dotenv").config({
    path: path.join(__dirname) + "/.env",
  });

if (!process.env.MONGO_URI) {
    throw new Error("MONGO URL IS MISSING FROM ENV ");
  }
  const connection = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  },()=>{
    console.log('Successfully Established Connection with MongoDB')
  });


    let course={
      courseName : "MERN",
      courseId : "M001",
      courseDuration:"3-month",
      courseFee :100
    }

    async function createCourse() { 
   let result =await service.createCourse(course)

     console.log(result)
    }


    createCourse()



