import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeefrm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeefrm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email , Validators.required ]),
      age: new FormControl(''),
      salary: new FormControl('', Validators.required)
    });
  }

  submitForm() {
    if(this.employeefrm.status == 'INVALID'){
      console.log('OPPS')
    }else{
      console.log('success')
    }
    console.log(this.employeefrm)
  }

  get name(){
    return this.employeefrm.get('name');
  }

  get email() {
    return this.employeefrm.get('email');
  }
}
