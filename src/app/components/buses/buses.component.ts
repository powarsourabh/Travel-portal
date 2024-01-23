import { Component, OnInit, TemplateRef } from '@angular/core';
import { BusserviceService } from 'src/app/busservice.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, switchMap, map, startWith } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';



interface BusLocation {
  CityName: string;
  

  // include other properties that your objects have
}

interface BusSearchResponse {
  BusResults: BusResult[];
  Destination: string;
  Origin: string;
  TraceId: string;
}

interface BusResult {
name: any;
travelname:any;
departureTime: any;
arrivalTime: any;
BusPrice: any;
TravelName: any;
ServiceName: any;
  ResultIndex: number;
  ArrivalTime: string;
  AvailableSeats: number;
  DepartureTime: string;
  // ... add all other relevant fields
}

interface ApiResponse {
  data: {
    bus: BusLocation[];
  };
}

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  selectedCityName: string = '';

  busSearchResults: BusResult[] = [];
  searchControl = new FormControl();
  destinationControl = new FormControl();
  departdate = new FormControl();
  filteredOptions!: Observable<BusLocation[]>;
  filtereddestination!: Observable<any[]>;
  results: any[] = [];
  busResults!: any[];
  searchForm!: FormGroup;
  originOptions!: Observable<any[]>;
  destinationOptions!: Observable<any[]>;
  // busResultss!: any[];
  origin!: string;
  destination!: string;
  busSearchResultss: any[] = [];
 

  


  itemTemplate!: TemplateRef<any>;
  notFoundTemplate!: TemplateRef<any>;
  notFound: any;

  selectEvent(item: any) {

  }
  onchange(search: string) {

  }
  onfocused() {

  }

  constructor(private busserivce: BusserviceService, private fb: FormBuilder,  private router: Router) {

  }



  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
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

  // onSelect(option: any) {
  //   this.searchControl.setValue(option.CityId);
  //   this.filteredOptions = of([]);
    
  // }
  onSelect(option: any) {
    this.searchControl.setValue(option.CityId);
    this.selectedCityName = option.CityName; // Set the selected CityName
    this.filteredOptions = of([]);
  }
  

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input) {
      this.selectedCityName = input.value;
      // Add logic to filter options based on input.value
    }
  }
  
  

  // cityid replace with cityname

  onSelect1(option: any) {
    this.destinationControl.setValue(option.CityId);
    this.filtereddestination = of([]);

  }

  

  searchBuses() {
    // Check if the control values are not null or empty
    if (this.searchControl.value && this.destinationControl.value && this.departdate.value) {
      console.log('Searching buses with:', this.searchControl.value, this.destinationControl.value, this.departdate.value); // Debug log

     
      this.busserivce.searchBuses(this.searchControl.value, this.destinationControl.value, this.departdate.value)
        .subscribe(
        //   {
        //   next: (response: BusSearchResponse) => {
        //     console.log('Search response:', response);
        //     this.busSearchResults = response.BusResults;
        //     this.origin = response.Origin;
        //     this.destination = response.Destination;

        //     console.log(this.busSearchResults);
        //     this.router.navigate(['/ride']);
        //   },
        //   error: error => {
        //     console.error('Search error:', error);
        //   },
        //   complete: () => {
        //     console.log('Search completed');
        //   }
        // }
        (data:any)=>{
          console.log(data);
          this.busSearchResults = data;
          
        },
        error => {
          console.error('Search error:', error);
        },
        () => {
          console.log('Search completed');
        }
        );

    }
  }


  searchBusess() {
    // Check if the control values are not null or empty
    if (this.searchControl.value && this.destinationControl.value && this.departdate.value) {
      console.log('Searching buses with:', this.searchControl.value, this.destinationControl.value, this.departdate.value); // Debug log
  
      this.busserivce.searchBuses(this.searchControl.value, this.destinationControl.value, this.departdate.value)
        .subscribe(
          (data: any) => {
            console.log('Search response:', data);
            this.busSearchResultss = data.busResults; 
          },
          error => {
            console.error('Search error:', error);
          },
          () => {
            console.log('Search completed');
          }
        );
    }
  }
  


}
