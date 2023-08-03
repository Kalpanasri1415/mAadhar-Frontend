import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserHomeComponent } from './user-home/user-home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent},
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'user-login', component: UserLoginComponent},
  { path: 'user-register', component: UserRegistrationComponent},
  { path: 'user-home', component: UserHomeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
