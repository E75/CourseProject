import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import userDemoData from './users.mock';
import {Select, Store} from '@ngxs/store';
import {AppState} from '../app.state';
import {Observable} from 'rxjs';
import {AddUser, GetUsers} from './user.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Select(AppState.users) user$: Observable<User[]>;
  users: User[] = userDemoData;
  userName = '';
  email = '';

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    const currentUsers = new GetUsers();
    console.log(currentUsers);
    this.store.dispatch(currentUsers);
  }

  addUser() {
    const user = new User(this.users.length + 1, this.userName, this.userName, this.email);
    this.store.dispatch(new AddUser(user));
  }
}
