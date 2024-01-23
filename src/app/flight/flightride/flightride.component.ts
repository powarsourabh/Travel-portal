import { Component, HostListener } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-flightride',
  templateUrl: './flightride.component.html',
  styleUrls: ['./flightride.component.css']
})
export class FlightrideComponent {

  openModal(){
    
  }
  isMobileView: boolean | undefined;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event?: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
  }
}
