import UsersService, { User, Gender } from './users.service';


export default class UsersController implements angular.IComponentController {

  static $inject = [ 'UsersService' ];

  private users: User[] = [];
  private totalPages: number = 0;
  private currentPage: number = 0;
  private loading: boolean = false;
  private searchString: string = '';

  constructor(private UsersService: UsersService) {
    this.fetchUsers();
  }

  /**
   * Fetch users from the server and bind them into component.
   */
  private fetchUsers(page: number = 0, filter: string = ''): void {
    this.loading = true;

    this.UsersService.all(page, filter)
      .then((response: any) => {
        const {data: {users}, pagination: {page_number}} = response;

        this.users = users.map((user: User) => {
          const genderLabel = (user.gender === Gender.male) ? 'male' : 'female';
          return {...user, genderLabel};
        });
        this.totalPages = page_number;
        this.loading = false;
      })
      .catch((error: any) => {
        this.loading = false;
      });
  }

  private filterUsers(): void {
    this.fetchUsers(0, this.searchString);
  }

  private deleteUser(id: number): void {
    this.UsersService.delete(id)
      .then((response: any) => {
        const index: number = this.users.findIndex((user: User) => user.id === id);
        if(index !== -1) {
          this.users.splice(index, 1);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  private prevPage(): void {
    if(this.currentPage === 0) {
      return;
    }

    this.currentPage--;
    this.fetchUsers(this.currentPage);
  }

  private nextPage(): void {
    if(this.currentPage === this.totalPages - 1) {
      return ;
    }

    this.currentPage++;
    this.fetchUsers(this.currentPage);
  }

}
