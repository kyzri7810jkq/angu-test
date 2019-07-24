import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

   postId: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
  	let id = this.router.snapshot.paramMap.get('id');
  	this.postId = parseInt(id);
  }

}
