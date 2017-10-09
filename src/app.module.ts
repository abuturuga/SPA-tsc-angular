import { module } from 'angular';
import { AppComponent } from './app.component';
import '@uirouter/angularjs';
import './components/components.module';
import './pages/pages.module';
import './app.scss';


class Config {

  static $inject = [ '$urlRouterProvider' ];

  constructor($urlRouterProvider: angular.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

}

export default module('SPA-tsc', [
  'ui.router',
  'app.pages',
  'app.components'
])
.component('appRoot', AppComponent)
.config(Config)
.name;
