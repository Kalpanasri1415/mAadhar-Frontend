import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {

  public loginForm!: FormGroup;
  url="http://localhost:8080/citizens";
  submitted=false;
  
  constructor(private formBuilder: FormBuilder,private http: HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      citizenId : ['',Validators.required],
     mobileno : ['',Validators.required]

  })
  }
  onSubmit() {
    this.submitted = true;
    this.login();
  }

  login(){
    this.http.get<any>(this.url).subscribe(res=>{
      const log = res.find((a:any)=>{
        return a.citizenId === this.loginForm.value.citizenId && a.mobileno === this.loginForm.value.mobileno    
      });
      if(log){
        alert("Login Success,Click Ok to continue!!");
        this.loginForm.reset();
        this.router.navigate(['user-home']);

      }else{
        alert("Try Again!!");
      }
    },err=>{
        alert("Something Went Wrong!!");
        this.loginForm.reset();
    })
      
    
  }


}
