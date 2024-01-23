import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailwayTicketBookComponent } from './railway-ticket-book.component';

describe('RailwayTicketBookComponent', () => {
  let component: RailwayTicketBookComponent;
  let fixture: ComponentFixture<RailwayTicketBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RailwayTicketBookComponent]
    });
    fixture = TestBed.createComponent(RailwayTicketBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
