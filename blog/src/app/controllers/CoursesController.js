const Course = require('../model/Course');
const { mongooesToObject } = require('../../util/mongooes');
class CoursesController {
    show(req, res, next) {
        Course.findOne({ slug: req.param.flug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooesToObject(course)
                }))
            .catch((error) => next(error));
    }
}

module.exports = new CoursesController();
