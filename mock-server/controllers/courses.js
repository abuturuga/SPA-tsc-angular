const Router = require('express').Router(),
      state = require('../state');


Router.get('/', (req, res) => {
  const {courses} = state.get();
  res.send({status: 'success', data: {courses}});
});

module.exports = Router;