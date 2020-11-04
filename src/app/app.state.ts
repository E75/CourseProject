import { Injectable } from '@angular/core';
import {State} from '@ngxs/store';

export interface AppStateModel {
  objects: any[];
}

@State<AppStateModel>({
  name: 'App',
  defaults: {
    objects: [],
  }
})

@Injectable()
export class AppState {

  constructor(
  ) {
  }
}

