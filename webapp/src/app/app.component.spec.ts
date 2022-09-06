import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommentService } from './comment.service';

describe('AppComponent', () => {
  let testBedService: CommentService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports : [HttpClientTestingModule],
      providers:[CommentService]
    }).compileComponents();
  });

  beforeEach(async () => {
    testBedService = TestBed.inject(CommentService);
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
