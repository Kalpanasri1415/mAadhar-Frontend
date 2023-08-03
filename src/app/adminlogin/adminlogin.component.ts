import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router class

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username: string = 'admin'; 
  password: string = 'Admin@123';

  constructor(private router: Router) {} // Inject the Router service in the constructor

  onSubmit() {
    if (!this.username || !this.password) {
      console.log('Invalid credentials. Please try again.');
      return;
    }

    // Validate Admin password
    if (this.isAdminPasswordValid(this.password)) {
      console.log('Admin Login successful!');
      this.router.navigateByUrl('/admin-home');
    } else {
      console.log('Invalid Admin credentials. Please try again.');
    }
  }

  isAdminPasswordValid(password: string): boolean {
    // Admin password should have at least one uppercase, one lowercase, one special character (@,#,&…), and one number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#&])[A-Za-z\d@#&]{8,}$/;
    return passwordRegex.test(password);
  }
}
