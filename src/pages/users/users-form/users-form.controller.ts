import UsersService, { User } from '../users.service';


export default class UsersFormController implements angular.IComponentController {

  static $inject = [ 'UsersService', '$state' ];

  private loading: boolean = false;
  private model: User;
  private id: string;

  constructor(private UsersService: UsersService, private $state: angular.ui.IStateService) {

  }

  $onInit() {
    this.id = this.$state.params.id;
    if(this.id !== 'new') {
      this.fetchUser();
    }
  }

  private fetchUser(): void {
    this.loading = true;
    this.UsersService.get(parseInt(this.id))
      .then(({data}) => {
        this.model = data.user;
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
      this.UsersService.create(this.model) : this.UsersService.update(this.model);

    promise.then(() => {
      this.loading = false;
      this.$state.go('users');
    })
    .catch(() => {
      this.loading = false;
    })
  }

}
