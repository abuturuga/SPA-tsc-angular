const Router = require('express').Router(),
      state = require('../state');


const findUser = (id, res) => {
  const {users} = state.get(),
        index = users.findIndex(user => user.id.toString() === id.toString());

  if(index === -1) {
    res.send({
      "status": "error",
      "message": "Candidate not found"
    })
    return null;
  }

  return index;
};

Router.get('/', (req, res) => {
  const {users} = state.get();
  let page = parseInt(req.query.page),
      limit = parseInt(req.query.limit);

  page = (!isNaN(page)) ? page : 0;
  limit = (!isNaN(limit)) ? limit : 10;

  res.send({
    status: 'success',
    data: {users: users.slice(page * limit, (page * limit) + limit)},
    pagination: {
      per_page: limit,
      page_number: users.length
    }
  });
});

Router.get('/:id', (req, res) => {
  const index = findUser(req.params.id, res);
  if(index === null) return;
  const user = state.get().users[index];
  console.log(index);
  res.send({
    status: 'success',
    data: {
      user
    }
  });
});

Router.put('/:id', (req, res) => {
  const index = findUser(req.params.id, res);
  if(index === null) return;

  const user = Object.assign({}, state.get().users[index], req.body);
  state.get().users[index] = user;

  res.send({
    status: 'success',
    data: {
      user_id: req.params.id
    }
  })
});

Router.post('/', (req, res) => {
  const id = state.createUser(req.body);

  res.send({
    status: 'success',
    data: {
      id
    }
  })
});

Router.delete('/:id', (req, res) => {
  const index = findUser(req.params.id, res);
  if(index === null) return;

  state.removeUser(req.params.id);

  res.send({
    status: 'success',
    data: null
  })
});

module.exports = Router;
