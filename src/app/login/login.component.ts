import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../shared/UserLogin';
import { UserLoginServiceService } from '../Shared/user-login-service.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../Shared/shared.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin = new UserLogin();
  ResponseData: any;
  errorMsg = false;
  constructor(private userLoginService: UserLoginServiceService, private routes: Router, private fb: FormBuilder,
              private sharedService: SharedService) { }
  userForm = this.fb.group({
    userName: ['', Validators.required],
    userPassword: ['']
  });
  loginUser() {
    this.userLoginService.loginUser(this.userLogin).subscribe(
      (res) => {
        this.ResponseData = res;
        console.log(this.ResponseData);
        this.userLoginService.addCurrentUser(this.ResponseData);
        sessionStorage.setItem('user', this.ResponseData.userName);
        if (this.ResponseData) {
          this.routes.navigate(['/home']);
        }
      },
      (error) => {
        this.errorMsg = error;
        if (this.errorMsg) {
          this.errorMsg = true;
          console.log(this.errorMsg);
        }
      }
    );
  }
  onRoute() {
    this.sharedService.setUserDetails(this.userLogin.userName);
    this.routes.navigate(['/reset']);
  }

  ngOnInit() {

  }

}
