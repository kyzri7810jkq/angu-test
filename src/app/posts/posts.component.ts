import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts = new Posts('One moment', 'description')

  constructor() { }

  ngOnInit() {
  }

  submitPost(event){
  	event.preventDefault();
  	console.log('THIS IS')
  }

}
