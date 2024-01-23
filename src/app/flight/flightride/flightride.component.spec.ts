import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightrideComponent } from './flightride.component';

describe('FlightrideComponent', () => {
  let component: FlightrideComponent;
  let fixture: ComponentFixture<FlightrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightrideComponent]
    });
    fixture = TestBed.createComponent(FlightrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
