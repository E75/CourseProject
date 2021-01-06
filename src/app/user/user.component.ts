import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import * as userDemoData from './users.json';
import {Select, Store} from '@ngxs/store';
import {AppState} from '../app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Select(AppState.users) user$: Observable<User[]>;
  users: User[] = userDemoData;
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    console.log(this.users);
    const user = new User(1, 'test', 'testtest', 'test@test.com');
    this.store.dispatch(user);
  }
}
