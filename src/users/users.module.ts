import { module } from 'angular';
import '@uirouter/angularjs';
import UsersService from './users.service';
import { UsersComponent } from './users.component';
import './users.scss';


class Config {

    static $inject = [ '$stateProvider' ];

    constructor($stateProvider: angular.ui.IStateProvider) {
      const page: angular.ui.IStateParamsService = {
        name: 'users',
        component: 'users',
        url: '/users'
      };

      $stateProvider.state(page);
    }

}

export default module('users', ['ui.router'])
  .service('UsersService', UsersService)
  .component('users', UsersComponent)
  .config(Config)
  .name;
