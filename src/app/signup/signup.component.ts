import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    username: new FormControl(''),
    passwrd: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.signupForm.value);
  }
}
