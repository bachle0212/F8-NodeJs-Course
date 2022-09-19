const res = require('express/lib/response');
const Course = require('../models/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class CourseController {
    //[GET] me/stored/courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeteled()])
            .then(([courses, deletedCount]) =>
                res.render('me/trashCourses', {
                    deletedCount,
                    courses: mutipleMongooseToObject(courses)
                }));

        Course.countDocuments()
            .then((deletedCount) => {
                console.log(deletedCount)
            })
            .catch(next)
        Course.find({})
            .then(courses => res.render('me/storedCourses',
                {
                    courses: mutipleMongooseToObject(courses)
                }))
            .catch(next);
    }
    //[GET] me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then(courses => res.render('me/trashCourses',
                {
                    courses: mutipleMongooseToObject(courses)
                }))
            .catch(next);
    }

}

module.exports = new CourseController();
