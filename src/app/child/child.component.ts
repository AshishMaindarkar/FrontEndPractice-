import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { UserLoginServiceService } from '../Shared/user-login-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentData: any;
  @Input() Id: number;
  userDetailsData = [];
  currentUserData: any;

  constructor(private UserLoginService: UserLoginServiceService) { }
  changeFromChild() {
    this.parentData -= 1;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (!!this.Id) {
      this.UserLoginService.getUserDetailsById(this.Id).subscribe((res) => {
        this.userDetailsData = res;
        console.log(this.userDetailsData);
      });
      console.log(changes);

    }
  }
  ngOnInit() {
    this.UserLoginService.currentUser.subscribe((res) => {
      this.currentUserData = res;
    });
  }


}
