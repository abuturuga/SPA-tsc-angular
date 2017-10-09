import * as angular from 'angular';
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
        component: 'courses',
        url: '/'
      };

      $stateProvider.state(page);
    }

}

export default angular.module('courses', [
  'ui.router',
  'course.card'
])
.service('CoursesService', CoursesService)
.component('courses', CoursesComponent)
.config(Config)
.name;
