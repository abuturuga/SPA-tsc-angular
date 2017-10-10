export enum Gender {
  female = 'f',
  male = 'm'
}

export interface User {
  id: number;
  gender: Gender;
  first_name: string;
  last_name: string;
}


export default class Users {

  static $inject = [ '$http' ];
  private endpoint: string = '/api/v1.0/users';

  constructor(private $http: angular.IHttpService) {}

  all(page: number = 0, filter: string = '') {
    return this.$http.get(`${this.endpoint}?page=${page}&limit=10&filter=${filter}`)
      .then(({data}) => data);
  }

  /**
   * Get a single user from the server
   * @param  {number} id [User id]
   */
  get(id: number) {
    return this.$http.get(`${this.endpoint}/${id}`)
      .then(({data}) => data);
  }

  /**
   * Update an user from the server
   * @param  {User}   user [User model]
   */
  update(user: User) {
    const id: number = user.id;

    return this.$http.put(`${this.endpoint}/${id}`, user)
      .then(({data}) => data);
  }

  /**
   * Create a new user resource on the server
   * @param  {User}   user [User model]
   */
  create(user: User) {
    return this.$http.post(this.endpoint, user)
      .then(({data}) => data);
  }

  /**
   * Remove a user resource from the server
   * @param  {number} id [User id]
   */
  delete(id: number) {
    return this.$http.delete(`${this.endpoint}/${id}`)
      .then(({data}) => data);
  }

}
