import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppState} from './app.state';
import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './Login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
