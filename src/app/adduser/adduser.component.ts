import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

  addUserForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]),
    lastname: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, this.ageRangeValidator]),
    Address: new FormGroup({
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required])
    })
  });
  submitUser() {
    console.log(this.addUserForm.value);
  }

  // get firstname() {
  //   return this.addUserForm.get('firstname');
  // }
  // get Address() {
  //   return this.addUserForm.get('Address');
  // }
  // get lastname() {
  //   return this.addUserForm.get('lastname');
  // }
  // get address() {
  //   return this.address.get('Address.address');
  // }
  // get state() {
  //   return this.state.get('Address.state');
  // }
  // get city() {
  //   return this.city.get('Address.city');
  // }
  constructor() { }

  ngOnInit() {

  }
  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
      return { ageRange: true };
    }
    return null;
  }
  // submitUser() {
  //   console.log(this.addUserForm.value);
  // }
}
