const Router = require('express').Router(),
      state = require('../state');

const findCourse = (id, res) => {
  const {courses} = state.get(),
        index = courses.findIndex(course => course.id.toString() === id.toString());

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
  const {courses} = state.get();
  res.send({status: 'success', data: {courses}});
});

Router.get('/:id', (req, res) => {
  const index = findCourse(req.params.id, res);
  if(index === null) return;
  const course = state.get().courses[index];

  res.send({
    status: 'success',
    data: {
      course
    }
  });
});

Router.put('/:id', (req, res) => {
  const index = findCourse(req.params.id, res);
  if(index === null) return;

  const user = Object.assign({}, state.get().courses[index], req.body);
  state.get().courses[index] = user;

  res.send({
    status: 'success',
    data: {
      course_id: req.params.id
    }
  })
});

Router.post('/', (req, res) => {
  const id = state.createCourse(req.body);

  res.send({
    status: 'success',
    data: {
      id
    }
  })
});

module.exports = Router;
