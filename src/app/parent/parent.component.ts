import { Component, OnInit } from '@angular/core';
import { UserLoginServiceService } from '../Shared/user-login-service.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  data = 0;
  id: any;
  UserDetailsData = [];
  constructor(private userLoginService: UserLoginServiceService, private fb: FormBuilder) { }

  selectUser = new FormGroup({
    selectedUser: new FormControl('')
  });

  get user() {
    return this.selectUser.get('selectedUser');
  }

  changeFromParent() {
    this.data += 1;
  }
  onChange(event) {
    console.log(this.selectUser.value);
    this.id = this.selectUser.controls.selectedUser.value;
    console.log(this.id);
  }
  ngOnInit() {
    this.userLoginService.getUserDetails().subscribe((res) => {
      this.UserDetailsData = res;
    });
  }

}
