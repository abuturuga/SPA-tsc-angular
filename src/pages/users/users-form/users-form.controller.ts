import UsersService, { User } from '../users.service';


export default class UsersFormController {

  static $inject = [ 'UsersService', '$state' ];

  private loading: boolean = false;
  private model: User;

  constructor(private UsersService: UsersService, private $state: angular.ui.IStateService) {  }

  /**
   * Save the model on the server.
   */
  private save(): void {
    this.loading = true;
    this.UsersService.create(this.model)
      .then(() => {
        this.loading = false;
        this.$state.go('users');
      })
      .catch(() => {
        this.loading = false;
      })
  }

}
