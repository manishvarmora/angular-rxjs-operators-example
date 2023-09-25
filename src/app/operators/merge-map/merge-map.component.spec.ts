import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapComponent } from './merge-map.component';

describe('MergeMapComponent', () => {
  let component: MergeMapComponent;
  let fixture: ComponentFixture<MergeMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MergeMapComponent]
    });
    fixture = TestBed.createComponent(MergeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
