import * as angular from 'angular';
import '@uirouter/angularjs';
import { UsersComponent } from './users.component';


class Config {
  
    static $inject = [ '$stateProvider', '$urlRouterProvider' ];
  
    constructor($stateProvider: angular.ui.IStateProvider) {
      const page: angular.ui.IStateParamsService = {
        name: 'users',
        component: 'users',
        url: '/users'
      };
  
      $stateProvider.state(page);
    }
  
}

export default angular.module('users', ['ui.router'])
  .component('users', UsersComponent)
  .config(Config)
  .name;
