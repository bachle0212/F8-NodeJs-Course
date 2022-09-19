const res = require('express/lib/response');
const Course = require('../models/Course')
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
class CourseController {
    //[GET] /news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('course', {
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);
    }

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(courses => res.render('courses/edit', {
                courses: mongooseToObject(courses)
            }))
            .catch(next)
    }

    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    //[DEL] /course/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[PATCH] /:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    //[DEL] /course/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
    // [GET]
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST]
    store(req, res, next) {
        // res.json(req.body);
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => { });
    }


}

module.exports = new CourseController();
