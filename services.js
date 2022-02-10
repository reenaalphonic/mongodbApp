const Course = require('./models/course');


async function createCourse(data) {
    try {

        let newCourse = new Course();
        newCourse.courseName = data.courseName;
        newCourse.courseId = data.courseId;
        newCourse.courseDuration = data.courseDuration;
        newCourse.courseFee=data.courseFee;

        return await newCourse.save();
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createCourse

}