import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projectForm = new FormGroup({
    projectname: new FormControl(''),
    projectdescription: new FormControl(''),
  });

 
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.projectForm.value);
  }
 
  }


