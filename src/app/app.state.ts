import {Injectable} from '@angular/core';
import {Action, Selector, State} from '@ngxs/store';
import {AddUser, GetUsers} from './user/user.action';
import {StateContext} from '@ngxs/store/src/symbols';
import userDemoData from './user/users.mock';
import {User} from './user/user.model';

export interface AppStateModel {
  objects: any[];
  users: any[];
}

@State<AppStateModel>({
  name: 'App',
  defaults: {
    objects: [],
    users: []
  }
})

@Injectable()
export class AppState {
  @Selector()
  static users(state: AppStateModel): any[] {return state.users; }

  constructor(
  ) {}
  @Action(AddUser)
  addUser(ctx: StateContext<AppStateModel>, { user }: AddUser): void {
      const existingUsers = ctx.getState().users;
      ctx.patchState({
        users: [...existingUsers, user]
      });
  }

  @Action(GetUsers)
  getUsers(ctx: StateContext<AppStateModel>): User[] {
    return userDemoData;
  }
}
