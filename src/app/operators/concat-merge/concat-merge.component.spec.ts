import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMergeComponent } from './concat-merge.component';

describe('ConcatMergeComponent', () => {
  let component: ConcatMergeComponent;
  let fixture: ComponentFixture<ConcatMergeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcatMergeComponent]
    });
    fixture = TestBed.createComponent(ConcatMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
