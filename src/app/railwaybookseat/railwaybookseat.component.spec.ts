import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwaybookseatComponent } from './railwaybookseat.component';

describe('RailwaybookseatComponent', () => {
  let component: RailwaybookseatComponent;
  let fixture: ComponentFixture<RailwaybookseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RailwaybookseatComponent]
    });
    fixture = TestBed.createComponent(RailwaybookseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
