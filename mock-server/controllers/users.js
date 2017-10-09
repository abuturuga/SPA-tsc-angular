const Router = require('express').Router(),
      state = require('../state');


Router.get('/', (req, res) => {
  const {users} = state.get();
  let page = parseInt(req.query.page),
      limit = parseInt(req.query.limit);

  page = (!isNaN(page)) ? page : 0;
  limit = (!isNaN(limit)) ? limit : 10;

  res.send({
    status: 'success',
    data: {users: users.slice(page, limit)},
    pagination: {
      per_page: limit,
      page_number: users.length
    }
  });
});

module.exports = Router;
