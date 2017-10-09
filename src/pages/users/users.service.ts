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

  all(page: number = 0) {
    return this.$http.get(`/api/v1.0/users?page=${page}&limit=10`)
      .then(({data}) => data);
  }

}
