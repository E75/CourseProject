import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import userDemoData from './users.mock';
import {Select, Store} from '@ngxs/store';
import {AppState} from '../app.state';
import {Observable} from 'rxjs';
import {AddUser, EditUser, GetUsers, RemoveUser} from './user.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Select(AppState.users) user$: Observable<User[]>;
  userName = '';
  email = '';

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    const currentUsers = new GetUsers();
    console.log(currentUsers);
    this.store.dispatch(currentUsers);
  }

  addUser() {
    let length = 0;
    this.user$.subscribe(result => length = result.length);
    length = (length + 1);
    console.log(length);
    const user = new User(length, this.userName, this.userName, this.email);
    this.store.dispatch(new AddUser(user));
  }

  removeUser(user: User) {
    this.store.dispatch(new RemoveUser(user));
  }

  editUser(user: User) {
    this.router.navigate(['/editUser', user.id]);
    this.store.dispatch(new EditUser({...user, username: this.userName, email: this.email}));
  }
}
