import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObservableComponent } from './custom-observable.component';

describe('CustomObservableComponent', () => {
  let component: CustomObservableComponent;
  let fixture: ComponentFixture<CustomObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomObservableComponent]
    });
    fixture = TestBed.createComponent(CustomObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
