import CoursesService, { Course } from '../courses.service';
import UsersService, { User } from '../../users/users.service';


export default class CourseFormController implements angular.IComponentController {

  static $inject = [ 'CoursesService', '$state', 'UsersService' ];

  private availableUsers: User[] = [];
  private loading: boolean = false;
  private model: Course;
  private id: string;
  private startDate: any = null;
  private endDate: any = null;

  constructor(
    private CoursesService: CoursesService,
    private $state: angular.ui.IStateService,
    private UsersService: UsersService
  ) {}

  $onInit() {
    this.id = this.$state.params.id;

    if(this.id !== 'new') {
      this.fetchCourse();
    }
  }

  private updateDate(): void {
    this.model.start = (this.startDate) ? this.startDate.getTime() : null;
    this.model.end = (this.startDate) ? this.endDate.getTime() : null;
  }

  private fetchCourse(): void {
    this.loading = true;
    this.CoursesService.get(parseInt(this.id))
      .then(({data}) => {
        this.model = data.course;
        this.startDate = new Date(this.model.start);
        this.endDate = new Date(this.model.end);
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }

  private onUsersQuery(query: any): void {
    this.UsersService.all(0, query)
      .then(({data}) => {
        this.availableUsers = data.users;
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
