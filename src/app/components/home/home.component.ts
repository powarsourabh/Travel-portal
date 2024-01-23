import { Component, OnInit, TemplateRef } from '@angular/core';
import { BusserviceService } from 'src/app/busservice.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, map, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';



interface BusLocation {
  CityName: string;
  // include other properties that your objects have
}

interface ApiResponse {
  data: {
    bus: BusLocation[];
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  searchControl = new FormControl();
  destinationControl = new FormControl();

  filteredOptions!: Observable<BusLocation[]>;
  filtereddestination!: Observable<BusLocation[]>;


  results: any[] = [];
  keyword = 'name';

  public cities = [
    {id:1,
    name:'mumbai'},
    {id:2,
    name:'pune'},
    {id:3,
    name:'kolhapur'},
    {id:4, name:'satara'}
    
  ];
itemTemplate!: TemplateRef<any>;
notFoundTemplate!: TemplateRef<any>;
notFound: any;

  selectEvent(item: any){

  }
  onchange(search:string){

  }
  onfocused(){
    
  }

  constructor(private busserivce:BusserviceService){this.searchControl.valueChanges.pipe(
    debounceTime(300),
    switchMap(term => this.busserivce.searchLocation(term))
  ).subscribe(data => {
    this.results = data;
    // process and display data
  }, error => {
    // handle error
  }); }
 

  






  


ngOnInit() {
  this.filteredOptions = this.searchControl.valueChanges.pipe(
    debounceTime(300), // to limit API requests while typing
    startWith(''),
    switchMap(value => {
      if (value) {
        // When there is a value, call the API
        return this.busserivce.getBusLocations(value);
      } else {
        // When there is no value, return an observable with an empty ApiResponse
        return of({ data: { bus: [] } }); // Match the structure of ApiResponse
      }
    }),
    tap(response => console.log('API Response:', response)), // Log the API response
    map(response => response.data.bus),
    tap(busArray => console.log('Mapped Bus Array:', busArray)) // Log the mapped data
  );

  this.filtereddestination = this.destinationControl.valueChanges.pipe(
    debounceTime(100), 
    startWith(''),
    switchMap(value => {
      if (value) {
        return this.busserivce.getBusLocations(value);
      } else {
        return of({ data: { bus: [] } }); 
      }
    }),
    tap(response => console.log('API Response:', response)), 
    map(response => response.data.bus),
    tap(busArray => console.log('Mapped Bus Array:', busArray)) 
  );

}



  onSelect(option: any) {
    this.searchControl.setValue(option.CityName);
    this.filteredOptions = of([]);
    // You can also do other things like closing the suggestion list
  }
  
  onSelect1(option: any) {
    this.destinationControl.setValue(option.CityName);
   this.filtereddestination = of ([]);
  
}
}
