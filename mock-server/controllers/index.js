const Router = require('express').Router(),
      CoursesController = require('./courses');


Router.use('/courses', CoursesController);
module.exports = Router;