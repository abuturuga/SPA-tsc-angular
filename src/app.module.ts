import * as angular from 'angular';
import { AppComponent } from './app.component';
import '@uirouter/angularjs';
import 'angular-material';
import 'angular-material/angular-material.scss';
import './courses/courses.module';
import './users/users.module';
import './app.scss';


class Config {
  
    static $inject = [ '$urlRouterProvider' ];
  
    constructor($urlRouterProvider: angular.ui.IUrlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    }
  
}

export default angular.module('SPA-tsc', [
  'ngMaterial',
  'courses',
  'users'
])
.component('appRoot', AppComponent)
.config(Config)
.name;

