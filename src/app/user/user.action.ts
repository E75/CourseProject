import {User} from './user.model';

export class AddUser {
  static readonly type = '[Appstate] Add User';
  constructor(public user: User) {}
}

export class GetUsers {
  static readonly type = '[Appstate] Get Users';
}
