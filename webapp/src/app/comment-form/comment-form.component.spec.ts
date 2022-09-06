import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommentService } from '../comment.service';

import { CommentFormComponent } from './comment-form.component';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let testBedService: CommentService;
  let fixture: ComponentFixture<CommentFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFormComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    testBedService = TestBed.inject(CommentService);
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSubmit Method', waitForAsync(()=>{
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', waitForAsync(()=>{
    component.commentForm.controls['name'].setValue('');
    component.commentForm.controls['message'].setValue('');
    expect(component.commentForm.valid).toBeFalsy();
  }))

  it('form should be invalid', waitForAsync(()=>{
    component.commentForm.controls['name'].setValue('Test');
    component.commentForm.controls['message'].setValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation');
    expect(component.commentForm.valid).toBeTruthy();
  }))
});
