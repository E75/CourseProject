import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  password = '';
  username = '';

  constructor() {}

  ngOnInit(): void {
    this.password = 'test';
    this.username = 'test';
  }

  onLoginClick() {
     alert(this.password + '--' + this.username);
  }
}
