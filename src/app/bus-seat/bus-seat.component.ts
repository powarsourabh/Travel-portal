import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';




export class Ticket {
  constructor(public id: string, public fare: number, public ticketClass: string) {}
}

@Component({
  selector: 'app-bus-seat',
  templateUrl: './bus-seat.component.html',
  styleUrls: ['./bus-seat.component.css']
})
export class BusSeatComponent implements OnInit {
  public seats = [{ number: '1A' }, { number: '1B' }, /* more seats */];

  countdown: number = 15 * 60;
 
  private subscription: Subscription = new Subscription;
  timeLeft: number = 15 * 60; // 15 minutes in seconds
  displayTime!: string;

  startTimer() {
    const source = interval(1000);
    this.subscription = source.subscribe(val => {
      this.timeLeft--;
      this.displayTime = this.formatTime(this.timeLeft);
      if (this.timeLeft === 0) {
        this.subscription.unsubscribe();
      }
    });
  }

  formatTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time - minutes * 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  tickets: Ticket[] = [
    new Ticket('B2', 500, 'Economy'),
    new Ticket('C4', 500, 'Economy'),
    new Ticket('A1', 500, 'Economy')
];

ngOnInit(): void {
  this.startCountdown();
 this.startTimer();
}

startCountdown() {
  const interval = setInterval(() => {
    this.countdown--;
    if (this.countdown <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}


getTotalFare(): number {
    return this.tickets.reduce((total, ticket) => total + ticket.fare, 0);
}

  seat:any
  closeModal() {
    
  }

  selectSeat(seat:any) {


  }
}
