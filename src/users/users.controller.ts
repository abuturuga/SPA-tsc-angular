import UsersService, { User } from './users.service';


export default class UsersController implements angular.IComponentController {

  static $inject = [ 'UsersService' ];
  
  private users: User[] = [];

  constructor(private UsersService: UsersService) {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.UsersService.all()
      .then((response: any) => {
        console.log(response);
      });
  }

}
