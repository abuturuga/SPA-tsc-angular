import * as angular from 'angular';
import { AppComponent } from './app.component';
import '@uirouter/angularjs';
import 'angular-material';
import 'angular-material/angular-material.scss';
import './app.scss';


export default angular.module('SAP-tsc', [
  'ui.router',
  'ngMaterial'
])
.component('appRoot', AppComponent)
.name;

