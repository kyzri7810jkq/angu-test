import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [
  	{id: 1, title: 'My first Post'},
  	{id: 2, title: 'My Second Post' },
  	{id: 3, title: 'My Third'}
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onClick(id) {
  	this.router.navigate(['/posts' , id]); 
  }

}
