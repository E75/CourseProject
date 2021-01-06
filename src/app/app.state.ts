import {Injectable} from '@angular/core';
import {Action, Selector, State} from '@ngxs/store';
import {AddUser} from './user/user.action';
import {mergeMap, tap} from 'rxjs/operators';
import {StateContext} from '@ngxs/store/src/symbols';
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
  static users(state: AppStateModel) {return state.users; }

  constructor(
  ) {}
  @Action(AddUser)
  addUser(ctx: StateContext<AppStateModel>, { user }: AddUser) {
      const existingUsers = ctx.getState().users;
      ctx.patchState({
        users: [existingUsers, user]
      });
  }
}
