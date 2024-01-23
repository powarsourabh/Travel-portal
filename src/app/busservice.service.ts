import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


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

@Injectable({
  providedIn: 'root'
})
export class BusserviceService {

  

  searchLocation(term: string): Observable<any> {
    return this.http.get(`${'https://bus-booking.comuniqate.com/api/bus-booking/geo-location-search'}?term=${term}`);
  }

 
  private apiUrl = 'https://bus-booking.comuniqate.com/api/bus-booking/bus-search';


  constructor(private http: HttpClient) { }

  searchBusees(originId: string, destinationId: string, departDate: string): Observable<any> {
    const body = {
      origin_id: originId,
      destination_id: destinationId,
      depart_date: departDate
    };
    return this.http.post(this.apiUrl, body);
  }


  getBusLocations(term?: string): Observable<ApiResponse> {
    let queryParams = '';
    if (term) {
      queryParams = `?term=${term}`;
    }
    return this.http.get<ApiResponse>(`${'https://bus-booking.comuniqate.com/api/bus-booking/geo-location-search'}${queryParams}`);  
  }

  searchBuses(originId: string, destinationId: string, departDate: string): Observable<any> {
    const url = 'https://bus-booking.comuniqate.com/api/bus-booking/bus-search';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'pid':'77A92052', 'x-api-key':6567139061345  });
    const body = {
      origin_id: originId,
      destination_id: destinationId,
      depart_date: departDate,
      
    };

    return this.http.post(url, body, { headers });
  }


  private createBusSearchBody(originId: string, destinationId: string, departDate: string): any {
    return {
      origin_id: originId,
      destination_id: destinationId,
      depart_date: departDate
    };
  }

 

  public searchBusess(originId: string, destinationId: string, departDate: string): Observable<BusSearchResponse> {
    const url = 'https://bus-booking.comuniqate.com/api/bus-booking/bus-search';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { origin_id: originId, destination_id: destinationId, depart_date: departDate };
  
    // Log the input parameters and the request body
    // console.log('searchBuses called with:', { originId, destinationId, departDate });
    console.log('Request body:', body);
  
    return this.http.post<BusSearchResponse>(url, body);
     
    
  }
  


  


}
