import { Component, OnInit, Input } from '@angular/core';
import { UserLogin } from '../shared/UserLogin';
import { UserLoginServiceService } from '../Shared/user-login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../Shared/shared.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  status: string;
  error = false;
  userReset = new UserLogin();
  userName: string;
  constructor(private userLoginService: UserLoginServiceService, private routes: Router, private router: ActivatedRoute,
              private sharedService: SharedService) { }

  ResetUserPassword(userReset: UserLogin) {
    this.userLoginService.ResetUser(this.userReset).subscribe((res) => {
      this.status = res;
      console.log(this.status);
      if (this.status) {
        this.error = true;
        this.routes.navigate(['login']);
      }
    },
      (err) => {
        this.error = err;
        console.log(this.error);
        if (this.error != null) {
          this.error = false;
        }
      });
  }
  ngOnInit() {

    this.userReset.userName = this.sharedService.getUserDetails();
  }
}


