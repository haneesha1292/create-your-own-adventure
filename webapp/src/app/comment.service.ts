import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Comment} from './comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  configUrl:string = 'http://localhost:3001';
  getCommentsUrl:string = '/getComments';
  createCommentUrl:string = '/createComment';

  constructor(private http : HttpClient) { }

  createComment(comment:Comment) : Observable<{}>{
    return this.http.post(this.configUrl+this.createCommentUrl, comment);
  }

  getComments() : Observable<{}>{
    return this.http.get(this.configUrl+this.getCommentsUrl);
  }
}
