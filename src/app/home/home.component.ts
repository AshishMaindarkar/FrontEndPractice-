import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginServiceService } from '../Shared/user-login-service.service';
import { UserLogin } from '../shared/UserLogin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flag = false;
  name: string;
  currentUserData: UserLogin;
  constructor(private routes: Router, private userLoginService: UserLoginServiceService) { }

  ngOnInit() {
    this.name = sessionStorage.getItem('user');
    this.userLoginService.currentUser.subscribe((res) => {
      this.currentUserData = res;
    });
  }
  logout() {
    sessionStorage.removeItem('user');
    this.userLoginService.sessionLogout().subscribe();
    this.routes.navigate(['/login']);
  }

}
