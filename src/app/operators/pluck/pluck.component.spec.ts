import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckComponent } from './pluck.component';

describe('PluckComponent', () => {
  let component: PluckComponent;
  let fixture: ComponentFixture<PluckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluckComponent]
    });
    fixture = TestBed.createComponent(PluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
