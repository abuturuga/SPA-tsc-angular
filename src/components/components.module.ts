import { module } from 'angular';
import { AppToolbarComponent } from './toolbar/toolbar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


export default module('app.components', [])
  .component('progressBar', ProgressBarComponent)
  .component('appToolbar', AppToolbarComponent)
  .name;
