import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Comment} from '../comment.model'
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Output() commentAdded = new EventEmitter();
  data: Comment;
  commentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  constructor(private commentService : CommentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.data = {
      name: this.commentForm.value.name,
      created: new Date(),
      message: this.commentForm.value.message
    }
    this.commentService.createComment(this.data).subscribe((result)=>{
      this.commentAdded.emit(true);
      this.commentForm.reset();
    }, (error)=>{
      alert(error);
    })
  }

}
