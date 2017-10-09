import './progress-bar.scss';


export const ProgressBarComponent: angular.IComponentOptions = {
  templateUrl: 'progress-bar.pug',
  bindings: {
    procent: '<'
  }
};
