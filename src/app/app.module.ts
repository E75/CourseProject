import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppState} from './app.state';
import { AppComponent } from './app.component';
import {NgxsModule} from '@ngxs/store';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
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
