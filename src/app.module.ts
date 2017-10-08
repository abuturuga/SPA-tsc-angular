import * as angular from 'angular';
import { AppComponent } from './app.component';
import './app.scss';


export default angular.module('SAP-tsc', [])
  .component('appRoot', AppComponent)
  .name;

