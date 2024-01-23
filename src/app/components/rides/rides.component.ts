import { Component } from '@angular/core';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.css']
})
export class RidesComponent {
  public seats = [{ number: '1A' }, { number: '1B' }, /* more seats */];


//   tickets: Ticket[] = [
//     new Ticket('B2', 500, 'Economy'),
//     new Ticket('C4', 500, 'Economy'),
//     new Ticket('A1', 500, 'Economy')
// ];

// getTotalFare(): number {
//     return this.tickets.reduce((total, ticket) => total + ticket.fare, 0);
// }

isInputDisabled = true; // Initially, the input is disabled

toggleSearchInput() {
  this.isInputDisabled = !this.isInputDisabled; // Toggle the input's disabled state
}
  seat:any
  closeModal() {
    
  }
  openModal(){
    
  }

  selectSeat(seat:any) {


  }
}
