import { Course } from './courses.service';


export default class CoursesController implements angular.IComponentController {
  
  static $inject = [ 'CoursesService' ];
  courses: Course[] = [];

  constructor(private CoursesService: any) {
  }

  async $onInit() {
    try {
      const response = await this.CoursesService.all();
      this.courses = response.data.courses;
    } catch(error) {
      console.log(error);
    }
  }

}