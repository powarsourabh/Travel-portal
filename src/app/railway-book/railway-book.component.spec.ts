import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayBookComponent } from './railway-book.component';

describe('RailwayBookComponent', () => {
  let component: RailwayBookComponent;
  let fixture: ComponentFixture<RailwayBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RailwayBookComponent]
    });
    fixture = TestBed.createComponent(RailwayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
