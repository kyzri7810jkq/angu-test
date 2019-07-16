import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactForm: Object;

  constructor() { }

  	ngOnInit(): void {
	  	this.contactForm = new FormGroup({
		  	userName: new FormControl('',[
		  		Validators.required,
		  		Validators.minLength(3)
		  	]),
		  	message: new FormControl()
		  });
  	}

	get userName() {
		return this.contactForm.get('userName'); 
	}

}
