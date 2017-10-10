export const CourseCardComponent: angular.IComponentOptions = {
  templateUrl: 'course-card.pug',
  bindings: {
    id: '<',
    title: '<',
    start: '<',
    end: '<',
    candidateLimit: '<',
    procent: '<',
    occupied: '<'
  }
};
