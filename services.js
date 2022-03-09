const Course = require('./models/course');
const Student = require('./models/student');


async function createCourse(courseName, courseId, courseDuration, courseFee) {
    try {

        let newCourse = new Course();
        newCourse.courseName = courseName;
        newCourse.courseId = courseId;
        newCourse.courseDuration = courseDuration;
        newCourse.courseFee = courseFee;
        return await newCourse.save();
    } catch (err) {
        throw err;
    }
}


async function updateCourse(id) {
    try {

        return result = Course.updateOne({ _id: id },
            {
                $set: { "courseFee": 200 }
            })
    } catch (err) {
        throw err;
    }
}


async function getCourse(id) {
    try {

        return result = Course.findOne({ _id: id })
            
    } catch (err) {
        throw err;
    }
}

async function deleteCourse(id) {
    try {


        return await Course.deleteOne({ _id: id });
    } catch (err) {
        throw err;
    }
}

async function listCourse() {
    try {

        return Course.find({})
    } catch (err) {
        throw err;
    }
}




async function listStudent() {
    try {

        return Student.find({})
    } catch (err) {
        throw err;
    }
}


async function addStudent(name, email, phone) {
    try {
        let newStudent = new Student();
        newStudent.name = name;
        newStudent.email = email;
        newStudent.phone = phone;

        return await newStudent.save();
    } catch (err) {
        throw err;
    }

}


async function searchStudent(name) {
    try {

        return Student.find({ name: name })
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createCourse,
    updateCourse,
    deleteCourse,
    listCourse,
    listStudent,
    addStudent,
    searchStudent,
    getCourse


}