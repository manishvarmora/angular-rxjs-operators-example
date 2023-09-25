import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapComponent } from './concat-map.component';

describe('ConcatMapComponent', () => {
  let component: ConcatMapComponent;
  let fixture: ComponentFixture<ConcatMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcatMapComponent]
    });
    fixture = TestBed.createComponent(ConcatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
