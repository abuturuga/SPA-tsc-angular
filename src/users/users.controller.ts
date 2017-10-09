import UsersService, { User } from './users.service';


export default class UsersController implements angular.IComponentController {

  static $inject = [ 'UsersService' ];

  private users: User[] = [];
  private totalPages: number = 0;

  constructor(private UsersService: UsersService) {
    this.fetchUsers();
  }

  /**
   * Fetch users from the server and bind them into component.
   */
  private fetchUsers(): void {
    this.UsersService.all()
      .then((response: any) => {
        const {data: {users}, pagination: {page_number}} = response;
        this.users = users;
        this.totalPages = page_number;
      });
  }

}
