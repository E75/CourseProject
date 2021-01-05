import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import * as userDemoData from './users.json';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = userDemoData;
  constructor() {
  }

  ngOnInit(): void {
    console.log(this.users);
  }
}
