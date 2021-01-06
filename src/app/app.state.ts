import {Injectable} from '@angular/core';
import {Action, Selector, State} from '@ngxs/store';
import {AddUser, EditUser, GetUsers, RemoveUser} from './user/user.action';
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
  static users(state: AppStateModel): any[] {
    return state.users;
  }

  constructor() {
  }

  @Action(AddUser)
  addUser(ctx: StateContext<AppStateModel>, {user}: AddUser): void {
    const existingUsers = ctx.getState().users;
    ctx.patchState({
      users: [...existingUsers, user]
    });
  }

  @Action(RemoveUser)
  removeUser(ctx: StateContext<AppStateModel>, {user}: RemoveUser): void {
    const existingUsers = ctx.getState().users;
    ctx.patchState({
      users: existingUsers.filter(m => m.id !== user.id),
    });
  }

  @Action(EditUser)
  editUser(ctx: StateContext<AppStateModel>, {user}: EditUser): void {
    const existingUsers = ctx.getState().users;
    ctx.patchState({
      users: existingUsers.map(m => m.id === user.id ? user : m),
    });
  }

  @Action(GetUsers)
  getUsers(ctx: StateContext<AppStateModel>): void {
    ctx.patchState({users: userDemoData});
  }
}
