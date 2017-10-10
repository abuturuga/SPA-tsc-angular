import CoursesService, { Course } from '../courses.service';


export default class CourseFormController implements angular.IComponentController {

  static $inject = [ 'CoursesService', '$state' ];

  private loading: boolean = false;
  private model: Course;
  private id: string;

  constructor(
    private CoursesService: CoursesService,
    private $state: angular.ui.IStateService
  ) {}

  $onInit() {
    this.id = this.$state.params.id;

    if(this.id !== 'new') {
      this.fetchCourse();
    }
  }

  private fetchCourse(): void {
    this.loading = true;
    this.CoursesService.get(parseInt(this.id))
      .then(({data}) => {
        this.model = data.course;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }


  /**
   * Save the model on the server.
   */
  private save(): void {
    this.loading = true;
    const promise: any = (this.id === 'new') ?
      this.CoursesService.create(this.model) : this.CoursesService.update(this.model);

    promise.then(() => {
      this.loading = false;
      this.$state.go('courses');
    })
    .catch(() => {
      this.loading = false;
    })
  }

}
