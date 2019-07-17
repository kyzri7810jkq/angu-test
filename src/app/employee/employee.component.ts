import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeefrm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    age: new FormControl(''),
    salary: new FormControl('', 
    Validators.required
    )
  });

  constructor() { }

  ngOnInit() {
  }

  submitForm(frm) {
    Event.prototype.preventDefault() 
    console.log(frm.value)
  }
}
