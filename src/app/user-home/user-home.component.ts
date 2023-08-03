import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { UserData } from './userdata.module';
import { UserModel } from './user.module';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  userModelObj: UserModel = new UserModel();
  public loginForm!: FormGroup;
  fetchedUsers: UserData[] = [];
  backendurl = 'http://localhost:8080/citizens';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [''],
      dob: [''],
      emailid: [''],
      mobileno: [''],
      address: [''],
      gender: [''],
    });
    this.fetchUsers();
  }


  fetchUsers() {
    this.http
      .get<UserData[]>(this.backendurl) // Assuming UserData[] is the response type
      .subscribe((users) => {
        // Add a "status" property to each user
        this.fetchedUsers = users.map((user) => {
          user.status = 'pending'; // Replace 'Active' with the actual status field from your API response
          return user;
        });
      });
  }

  onEdit(user: UserData) {
    this.userModelObj.citizenId = user.citizenId;
    this.loginForm.patchValue({
      name: user.name,
      dob: user.dob,
      emailid: user.emailid,
      mobileno: user.mobileno,
      address: user.address,
      gender: user.gender,
    });
  }
  updateUser() {
    this.userModelObj.name = this.loginForm.value.name;
    this.userModelObj.emailid = this.loginForm.value.emailid;
    this.userModelObj.gender = this.loginForm.value.gender;

    this.userModelObj.address = this.loginForm.value.address;
    this.userModelObj.mobileno = this.loginForm.value.mobileno;
    this.userModelObj.dob = this.loginForm.value.dob;

    this.api.UpdateUser(this.userModelObj, this.userModelObj.citizenId).subscribe(
      (res) => {
        alert('Updated Successfully!!');
        this.loginForm.reset();
        this.fetchUsers();
      },
      (err) => {
        alert('Something Went Wrong:/');
      }
    );
  }
}
