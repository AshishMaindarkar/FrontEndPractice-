import { Component, OnInit } from '@angular/core';
import { UserLoginServiceService } from '../Shared/user-login-service.service';
import { UserDetails } from '../Shared/user-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  UserDetailsData = [];
  constructor(private userLoginService: UserLoginServiceService, private routes: Router) { }
  flag = false;
  getAllUserDetails() {
    this.userLoginService.getUserDetails().subscribe(
      (res) => {
        this.UserDetailsData = res;
        console.log(this.UserDetailsData);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getUserDetailsById(id: number) {
    this.routes.navigate(['home/viewDetails/', id]);
  }
  onSearch() {

  }
  ngOnInit() {
    this.getAllUserDetails();
  }

}
