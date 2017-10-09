const Router = require('express').Router(),
      CoursesController = require('./courses'),
      UsersController = require('./users');


Router.use('/courses', CoursesController);
Router.use('/users', UsersController);
module.exports = Router;
