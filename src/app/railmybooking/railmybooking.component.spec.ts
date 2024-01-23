import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailmybookingComponent } from './railmybooking.component';

describe('RailmybookingComponent', () => {
  let component: RailmybookingComponent;
  let fixture: ComponentFixture<RailmybookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RailmybookingComponent]
    });
    fixture = TestBed.createComponent(RailmybookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
