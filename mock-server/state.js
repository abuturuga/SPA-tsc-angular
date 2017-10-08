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

const initCourses = limit => Array(limit).fill(0)
  .map((i, index) => ({
    id: index,
    title: `Course ${index}`
  }));

const initUsers = limit => Array(limit).fill(0)
  .map((i, index) => ({
    id: index,
    title: `User ${index}`
  }));

const init = () => {
  state.courses = initCourses(5);
  state.users = initUsers(5);
};

module.exports = {
  get,
  createUser,
  createCourse,
  init
};