import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusSeatComponent } from './bus-seat.component';

describe('BusSeatComponent', () => {
  let component: BusSeatComponent;
  let fixture: ComponentFixture<BusSeatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusSeatComponent]
    });
    fixture = TestBed.createComponent(BusSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
