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

  private endpoint: string = '/api/v1.0/courses';

  constructor(private $http: angular.IHttpService) {}

  all() {
    return this.$http.get(this.endpoint)
      .then(({data}) => data);
  }

  /**
   * Get a single course from the server
   * @param  {number} id [Course id]
   */
  get(id: number) {
    return this.$http.get(`${this.endpoint}/${id}`)
      .then(({data}) => data);
  }

  /**
   * Update a course from the server
   * @param  {Course}   course [Course model]
   */
  update(course: Course) {
    const id: number = course.id;

    return this.$http.put(`${this.endpoint}/${id}`, course)
      .then(({data}) => data);
  }

  /**
   * Create a new user resource on the server
   * @param  {Course}   course [Course model]
   */
  create(course: Course) {
    return this.$http.post(this.endpoint, course)
      .then(({data}) => data);
  }


}
