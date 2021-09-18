const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class Sitecontroller {
    //[GET] /news
    home(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
}
module.exports = new Sitecontroller();