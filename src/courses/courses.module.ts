import * as angular from 'angular';
import '@uirouter/angularjs';
import { CoursesComponent } from './courses.component';

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

export default angular.module('courses', ['ui.router'])
  .component('courses', CoursesComponent)
  .config(Config)
  .name;