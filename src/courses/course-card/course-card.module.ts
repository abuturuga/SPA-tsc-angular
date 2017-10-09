import { module } from 'angular';
import { CourseCardComponent } from './course-card.component';
import './course-card.scss';


export default module('course.card', [])
  .component('courseCard', CourseCardComponent)
  .name;
