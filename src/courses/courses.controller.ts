import { Course } from './courses.service';


export default class CoursesController implements angular.IComponentController {
  
  static $inject = [ 'CoursesService' ];
  courses: Course[] = [];

  constructor(private CoursesService: any) {
  }

  async $onInit() {
    try {
      this.courses = this.CoursesService.all();
    } catch(error) {
      console.log(error);
    }
  }

}