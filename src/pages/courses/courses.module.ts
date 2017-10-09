import { module } from 'angular';
import '@uirouter/angularjs';
import CoursesService from './courses.service';
import { CoursesComponent } from './courses.component';
import './course-card/course-card.module';
import './courses.scss';


class Config {

    static $inject = [ '$stateProvider', '$urlRouterProvider' ];

    constructor($stateProvider: angular.ui.IStateProvider) {
      const page: angular.ui.IStateParamsService = {
        name: 'courses',
        component: 'coursesPage',
        url: '/'
      };

      $stateProvider.state(page);
    }

}

export default module('app.courses-page', [
  'ui.router',
  'course.card'
])
.service('CoursesService', CoursesService)
.component('coursesPage', CoursesComponent)
.config(Config)
.name;
