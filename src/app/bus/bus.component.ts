import { Component, OnInit } from '@angular/core';
import { BusserviceService } from '../busservice.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  searchControl = new FormControl();
  results: any[] = [];

  filters = {
    busType: '',
    departureTime: '',
    boardingPoint: '',
    droppingPoint: ''
  };

  onFilterChange() {
    // Logic to handle filter changes
  }

  openModal() {
    // Logic to open the modal
  }
  constructor(private busserivce:BusserviceService){  this.searchControl.valueChanges.pipe(
    debounceTime(300),
    switchMap(term => this.busserivce.searchLocation(term))
  ).subscribe(data => {
    this.results = data;
    // process and display data
  }, error => {
    // handle error
  }); }

  ngOnInit() {
   
    
  }
  

  

}

