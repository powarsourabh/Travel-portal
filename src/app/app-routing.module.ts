import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BusComponent } from './bus/bus.component';
import { BusesComponent } from './components/buses/buses.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FlightComponent } from './flight/flight.component';
import { RailwayComponent } from './railway/railway.component';
import { BusSeatComponent } from './bus-seat/bus-seat.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { RegisComponent } from './regis/regis.component';
import { RidesComponent } from './components/rides/rides.component';
import { CouponComponent } from './coupon/coupon.component';
import { MytripComponent } from './mytrip/mytrip.component';
import { RailwayBookComponent } from './railway-book/railway-book.component';
import { RailwaybookseatComponent } from './railwaybookseat/railwaybookseat.component';
import { RailwayTicketBookComponent } from './railway-ticket-book/railway-ticket-book.component';
import { RailmybookingComponent } from './railmybooking/railmybooking.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { FlightrideComponent } from './flight/flightride/flightride.component';
import { FlightbookComponent } from './flightbook/flightbook.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'register', component:RegisterComponent}, 
  {path:'reg', component:RegisterComponent},
  {path:'regis',component:RegisComponent},
  {path:'login', component:LoginComponent},
  {path:'my-profile', component:MyProfileComponent},
  {path:'home', component:HomeComponent},
  {path:'flight', component:FlightComponent},
  {path:'railway',component:RailwayComponent},
  {path:'buses', component:BusesComponent},
  {path:'bus-seat', component:BusSeatComponent},
  {path:'passenger', component:PassengerComponent},
  {path:'bus', component:BusComponent},
  {path:'ride', component:RidesComponent},
  {path:'coupon', component:CouponComponent},
  {path:'mytrip', component:MytripComponent},
  {path:'railbook', component:RailwayBookComponent},
  {path:'railwaybkseat', component:RailwaybookseatComponent},
  {path:'railwaytktbook', component:RailwayTicketBookComponent},
  {path:'railmybook', component:RailmybookingComponent},
  {path:'navbar1', component:Navbar1Component},
  {path:'flightride', component:FlightrideComponent},
  {path:'flightbook',component:FlightbookComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
