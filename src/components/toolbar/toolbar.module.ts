import { module } from 'angular';
import { AppToolbarComponent } from './toolbar.component';
import './toolbar.scss';

export default module('app.toolbar', [])
  .component('appToolbar', AppToolbarComponent)
  .name;
