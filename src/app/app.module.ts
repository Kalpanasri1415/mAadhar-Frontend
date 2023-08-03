import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ApiService } from './service/api.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminHomeComponent,
    LoginComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
