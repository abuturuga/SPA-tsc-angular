import { module } from 'angular';
import { CourseCardComponent } from './course-card.component';


export default module('course.card', [])
  .component('courseCard', CourseCardComponent)
  .name;