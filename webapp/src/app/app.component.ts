import { Component, OnInit } from '@angular/core';
import {Comment} from './comment.model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  allComments:Comment[] = [];
  constructor(private commentService : CommentService){}
  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.commentService.getComments().subscribe((result:Comment[])=>{
      this.allComments = result;
    })
  }

  onCommentAdded(isAdded = false) {
    if(isAdded){
      this.getComments();
    }
  }

}
