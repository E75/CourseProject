import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppState} from './app.state';
import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './Login/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
