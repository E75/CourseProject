import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppState} from './app.state';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {NgxsModule} from '@ngxs/store';
import { environment } from 'src/environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar/navigation-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full'},
  { path: 'user', component: UserComponent },
  { path: 'editUser/:userId', component: EditUserComponent }
  // { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'user', component: UserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavigationBarComponent,
    UserComponent,
    EditUserComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
