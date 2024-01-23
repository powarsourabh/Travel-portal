import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketmodelComponent } from './ticketmodel.component';

describe('TicketmodelComponent', () => {
  let component: TicketmodelComponent;
  let fixture: ComponentFixture<TicketmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketmodelComponent]
    });
    fixture = TestBed.createComponent(TicketmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
