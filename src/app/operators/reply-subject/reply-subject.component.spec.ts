import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplySubjectComponent } from './reply-subject.component';

describe('ReplySubjectComponent', () => {
  let component: ReplySubjectComponent;
  let fixture: ComponentFixture<ReplySubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReplySubjectComponent]
    });
    fixture = TestBed.createComponent(ReplySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
