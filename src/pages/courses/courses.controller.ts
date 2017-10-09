import CoursesService, { Course } from './courses.service';


export default class CoursesController implements angular.IComponentController {

  static $inject = [ 'CoursesService' ];

  private courses: Course[] = [];

  constructor(private CoursesService: CoursesService) {
    this.fetchCourses();
  }

  /**
   * Fetch courses from the server and bind them to component.
   */
  private fetchCourses(): void {
    this.CoursesService.all()
      .then((response: any) => {
        this.courses = response.data.courses.map((course: Course) => {
          const length = course.candidates.length;

          return {
            ...course,
            procent: Math.floor(length / course.candidate_limit * 100),
            occupied: length
          };
        });
      })
  }

}
