import * as angular from 'angular';
import { AppComponent } from './app.component';
import '@uirouter/angularjs';
import './components/components.module';
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
  'courses',
  'users',
  'app.components'
])
.component('appRoot', AppComponent)
.config(Config)
.name;
