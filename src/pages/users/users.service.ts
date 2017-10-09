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

  constructor(private $http: angular.IHttpService) {}

  all() {
    return this.$http.get('/api/v1.0/users?page=0&limit=10')
      .then(({data}) => data);
  }

}
