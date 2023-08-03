import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-home/userdata.module';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent  implements OnInit {

  fetchedUsers: UserData[] = [];
  backendurl = 'http://localhost:8080/citizens';
  constructor(private http:HttpClient,private formBuilder:FormBuilder,private api:ApiService) {}

  ngOnInit(): void {
  }

  onFetchUsers(){
    this.fetchUsers();
  }
  fetchUsers() {
    this.http
      .get<UserData[]>(this.backendurl)
      .subscribe((users) => {
        // Assuming your API returns the "status" field for each user
        this.fetchedUsers = users.map((user) => {
          user.status = 'pending'; // Set the status field to the appropriate value from your API response
          return user;
        });
      });
  }

  onDeleteUser(id: number) {
    this.http.delete(this.backendurl + '/' + id).subscribe((response) => {
      console.log('User deleted: ' + response);
      // this.fetchPosts();
    });

    
  }
  onApprove(user: UserData) {
    // Modify the status to "approved"
    user.status = 'approved';
    // Call the API to update the status in the backend
    this.api.UpdateUser(user, user.citizenId).subscribe(
      (res) => {
        alert('User status changed to "Approved" successfully!!');
        this.fetchUsers(); // Refresh the user list after the status change
      },
      (err) => {
        alert('Something Went Wrong:/');
      }
    );
  }


}