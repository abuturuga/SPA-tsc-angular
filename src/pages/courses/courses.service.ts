import { User } from '../users/users.service';


export interface Course {
  id: number;
  begin: number;
  end: number;
  title: string;
  candidate_limit: number;
  candidates: User[];
}

export default class Courses {

  static $inject = [ '$http' ];

  constructor(private $http: angular.IHttpService) {}

  all() {
    return this.$http.get('/api/v1.0/courses')
      .then(({data}) => data);
  }

  create(payload: any) {

  }

  appendUser(id: number) {

  }

  removeUser(id: number) {

  }

}
