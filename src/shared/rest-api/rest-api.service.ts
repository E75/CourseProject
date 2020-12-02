import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {TokenModel} from '../models/TokenModel';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  reqHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {
  }

  public Login(userName: string, passWord: string ) {
    const body = new HttpParams()
      .set('username', userName)
      .set('password', passWord)
      .set('grant_type', 'password');

    return this.httpClient.post<TokenModel>(environment.apiUrl + '/token', body, { headers: this.reqHeaders })
      .subscribe(data => {
        console.log(data.access_token);
      });
  }
}
