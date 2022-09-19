const res = require("express/lib/response");
const Course = require("../models/Course");
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  //[GET] /
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('HOME', {
          courses: mutipleMongooseToObject(courses)
        })
      })
      .catch(next);
    // res.render("HOME");
  }

  //[GET] /
  show(req, res) {
    res.send("SITE DETAILS");
  }
}

module.exports = new SiteController();
