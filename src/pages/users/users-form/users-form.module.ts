import { module } from 'angular';
import '@uirouter/angularjs';
import { UsersFormPageComponent } from './users-form.component';
import './users-form.scss';


class Config {

    static $inject = [ '$stateProvider' ];

    constructor($stateProvider: angular.ui.IStateProvider) {
      const page: angular.ui.IStateParamsService = {
        name: 'usersForm',
        component: 'usersFormPage',
        url: '/users/:id/form'
      };

      $stateProvider.state(page);
    }

}

export default module('app.users-form-page', ['ui.router'])
  .component('usersFormPage', UsersFormPageComponent)
  .config(Config)
  .name;
