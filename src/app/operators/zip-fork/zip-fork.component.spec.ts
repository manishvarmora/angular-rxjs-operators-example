import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipForkComponent } from './zip-fork.component';

describe('ZipForkComponent', () => {
  let component: ZipForkComponent;
  let fixture: ComponentFixture<ZipForkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZipForkComponent]
    });
    fixture = TestBed.createComponent(ZipForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
