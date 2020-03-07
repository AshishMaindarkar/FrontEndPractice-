import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../Shared/user-details';
import { UserLoginServiceService } from '../Shared/user-login-service.service';

@Component({
  selector: 'app-view-user-details',
  templateUrl: './view-user-details.component.html',
  styleUrls: ['./view-user-details.component.scss']
})
export class ViewUserDetailsComponent implements OnInit {
  userDetails = new UserDetails();
  id: number;
  userDetailsData = [];
  constructor(private router: ActivatedRoute, private routes: Router, private UserLoginService: UserLoginServiceService) { }

  ngOnInit() {
    const Id = parseInt(this.router.snapshot.paramMap.get('id'), 10);
    this.id = Id;
    this.UserLoginService.getUserDetailsById(this.id).subscribe((res) => {
      this.userDetailsData = res;
    });
  }

}
