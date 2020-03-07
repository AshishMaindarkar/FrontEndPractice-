import { Injectable } from '@angular/core';
import { UserLogin } from './UserLogin';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  userLoginObj = new UserLogin();
  getUserDetails() {
    return this.userLoginObj.userName;
  }
  setUserDetails(username) {
    this.userLoginObj.userName = username;
  }
  constructor() { }
}
