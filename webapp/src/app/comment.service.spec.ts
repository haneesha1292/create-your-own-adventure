import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentService } from './comment.service';
import { Comment } from './comment.model';

describe('CommentService', () => {
  let httpMock: HttpTestingController;
  let service: CommentService;
  let dummyComment: Comment = {
    id : 1,
    name : 'Testing1234',
    created: new Date(),
    message: 'This is testing'
  }
  let dummyComments: Comment[] = [
    {"id":1,"name":"Haneesha","created": new Date("2022-09-06 18:45:43"),"message":"qweerrttyy",},
    {"id":2,"name":"Shanthan","message":"123i239829","created":new Date("2022-09-06 18:47:07")},
    {"id":3,"name":"Haneesha","message":"29329833","created":new Date("2022-09-06 18:49:22")},
    {"id":4,"name":"Haneesha","message":"8983223","created":new Date("2022-09-06 18:54:36")}] 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [CommentService]
    });
    service = TestBed.inject(CommentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createComment() should POST and return data', () => {
    service.createComment(dummyComment).subscribe((res) => {
      expect(res).toEqual({ id: 1 });
    });

    const req = httpMock.expectOne('http://localhost:3001/createComment');
    expect(req.request.method).toBe('POST');
    req.flush({ id : 1 });
  });

  it('getComments() should return data', () => {
    service.getComments().subscribe((res) => {
      expect(res).toEqual(dummyComments);
    });

    const req = httpMock.expectOne('http://localhost:3001/getComments');
    expect(req.request.method).toBe('GET');
    req.flush(dummyComments);
  });

});
