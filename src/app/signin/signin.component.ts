import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  siginForm = new FormGroup({
    username: new FormControl(''),
    passwrd: new FormControl(''),
  });
  constructor(private _snackBar: MatSnackBar,private router : Router) { }

  ngOnInit() {
  }
 onSubmit(){
   console.log(this.siginForm.value);
   if(this.siginForm.value.username!=="admin"){
    this._snackBar.open('Invalid Username or Password', 'Close', {
      duration: 2000,
    });
   }
   else{
     this.router.navigate(["/user"]);
   }
  
 }

}
