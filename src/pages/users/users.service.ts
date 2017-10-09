export enum Gender {
  female = 'f',
  male = 'm'
}

export interface User {
  id?: number;
  gender: Gender;
  first_name: string;
  last_name: string;
}

export default class Users {

  static $inject = [ '$http' ];
  private endpoint: string = '/api/v1.0/users';

  constructor(private $http: angular.IHttpService) {}

  all(page: number = 0) {
    return this.$http.get(`${this.endpoint}?page=${page}&limit=10`)
      .then(({data}) => data);
  }

  /**
   * Create a new user resource on the server
   * @param  {User}   user [User model]
   */
  create(user: User) {
    return this.$http.post(this.endpoint, user)
      .then((response: any) => {
        console.log(response);
      });
  }

}
