import { module } from 'angular';
import './courses/courses.module';
import './users/users.module';


export default module('app.pages', [
  'app.courses-page',
  'app.users-page'
])
.name;
