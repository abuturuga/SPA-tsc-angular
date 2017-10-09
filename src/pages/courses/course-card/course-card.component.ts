export const CourseCardComponent: angular.IComponentOptions = {
  templateUrl: 'course-card.pug',
  bindings: {
    title: '<',
    start: '<',
    end: '<',
    candidateLimit: '<',
    procent: '<',
    occupied: '<'
  }
};
