import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../shared/rest-api/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  password = '';
  username = '';

  constructor(private apiService: RestApiService) {}

  ngOnInit(): void {
    this.password = 'test';
    this.username = 'test';
  }

  onLoginClick() {
     this.apiService.Login(this.username, this.password);
  }
}
