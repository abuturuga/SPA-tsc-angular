import { module } from 'angular';
import '@uirouter/angularjs';
import { CouseFormPageComponent } from './course-form.component';
import './users-chips/users-chips.module';


class Config {

  static $inject = [ '$stateProvider' ];

  constructor($stateProvider: angular.ui.IStateProvider) {
    const page: angular.ui.IStateParamsService = {
      name: 'courseForm',
      component: 'courseFormPage',
      url: '/course/:id/form'
    };

    $stateProvider.state(page);
  }

}

export default module('app.course-form-page', [
  'ui.router',
  'app.users-chips'
])
.component('courseFormPage', CouseFormPageComponent)
.config(Config)
.name;
