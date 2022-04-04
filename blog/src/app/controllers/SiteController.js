const Course = require('../model/Course');
const { mutipleMongooesToObject } = require('../../util/mongooes');
class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render('home', {
          courses: mutipleMongooesToObject(courses),
        });
      })
      .catch((error) => next(error));
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
