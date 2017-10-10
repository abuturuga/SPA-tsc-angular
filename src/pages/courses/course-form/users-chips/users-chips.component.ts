import UsersChipsController from './users-chips.controller';
import './users-chips.scss';


export const UsersChipsComponent: angular.IComponentOptions = {
  templateUrl: 'users-chips.pug',
  controller: UsersChipsController,
  bindings: {
    users: '<',
    onQuery: '&',
    availableUsers: '<'
  }
};
