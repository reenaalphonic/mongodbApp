const readlineSync = require('readline-sync');
const mongoose = require("mongoose");
const path = require("path");

const service = require("./services")
require("dotenv").config({
  path: path.join(__dirname) + "/.env",
});


let result = null;

function displayOption() {
  console.log("-------------------------------------------------------");
  console.log("WelCome");
  console.log("---------------------- Course   -------------------------");
  console.log("1 : List of course    ");
  console.log("2 : Add Course     ");
  console.log("3 : Update Course    ");
  console.log("4 : Delete Course    ");
  console.log("---------------  Student --------------------");
  console.log("5 : List of student   ");
  console.log("6 : Add student       ");
  console.log("7 : Search Student    ");

  console.log("----------------- Exit ------------------");

  console.log("0 : Exit     ");

}
async function showOption() {
  let db = mongoose.connection;
  while (true) {
    displayOption();
    let userChoice = readlineSync.question("Operation to perform    ")
    console.log(userChoice)
    let response = ''
    switch (userChoice) {
      case "1":
        result = await service.listCourse()
        console.log(result)
        break;
      case "2":
        let courseName = readlineSync.question('Enter  course:    ');
        let courseId = readlineSync.question('Enter course id:  ');
        let courseDuration = readlineSync.question('Enter course Duration :   ');
        let courseFee = readlineSync.question('Enter course fees (USD) :     ');
        result = await service.createCourse(courseName, courseId, courseDuration, courseFee)

        console.log(result)
        break;
      case "3":
        response = readlineSync.question('Enter your  course, you want to update: ');
        result = await service.updateCourse(response)
        console.log(result)

        break;
      case "4":
        response = readlineSync.question('Enter your  course, you want to remove: ');
        result = await service.deleteCourse(response)
        console.log(result)
        break;
      case "5":
        result = await service.listStudent()
        console.log(result)

        break;

      case "6":

        let name = readlineSync.question('Enter your name  ');
        let email = readlineSync.question('Enter your email    ');
        let phone = readlineSync.question('Enter your phone   ');

        result = await service.addStudent(name, email, phone)
        console.log(result)
        break;


      case "7":
        response = readlineSync.question('Enter your name ');
        result = await service.searchStudent(response)
        console.log(result)
        break;

      case "0":
        db.close();
        return;
    }
  }

}


if (!process.env.MONGO_URI) {
  throw new Error("MONGO URL IS MISSING FROM ENV ");
}
const connection = mongoose.connect(process.env.MONGO_STUDENT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  //  useCreateIndex: true
}
).then(() => {
  showOption();
});




