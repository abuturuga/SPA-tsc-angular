const state = {
  users: [],
  courses: []
};

/**
 * Return the application state.
 * @returns {Object}
 */
const get = () => state;

/**
 * Append a new course into the state.
 * @param {Object} course Course payload from client
 * @returns {Number} Course id
 */
const createCourse = course => {
  const length = state.courses.length;
  state.courses.push(Object.assign({id: length}, course));
  return length;
};

const createUser = payload => {

  state.users.push(payload);

};

const rand = limit => Math.floor(Math.random() * limit);

const initCourses = (limit, users) => Array(limit).fill(0)
  .map((i, index) => {
    const candidate_limit = rand(10),
          start = rand(users.length - candidate_limit),
          end = rand(candidate_limit) + start;
          candidates = users.slice(start, end);

    return {
      id: index,
      title: `Course ${index}`,
      start: Date.now(),
      end: Date.now(),
      candidates,
      candidate_limit
    };
  });

const genderSeed = () => {
  const gender = ['m', 'f'];
  return gender[rand(2)];
}

const initUsers = limit => Array(limit).fill(0)
  .map((i, index) => ({
    id: index,
    gender: genderSeed(),
    first_name: `Jo${rand(100)}`,
    last_name: `Doe${rand(100)}`
  }));

const init = () => {
  state.users = initUsers(1000);
  state.courses = initCourses(15, state.users);
};

module.exports = {
  get,
  createUser,
  createCourse,
  init
};
