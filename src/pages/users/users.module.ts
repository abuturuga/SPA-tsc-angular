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
        component: 'usersPage',
        url: '/users'
      };

      $stateProvider.state(page);
    }

}

export default module('app.users-page', ['ui.router'])
  .service('UsersService', UsersService)
  .component('usersPage', UsersComponent)
  .config(Config)
  .name;
