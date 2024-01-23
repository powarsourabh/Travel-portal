import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancelComponent } from './components/booking/cancel/cancel.component';
import { ChangedateComponent } from './components/booking/changedate/changedate.component';
import { MailComponent } from './components/booking/mail/mail.component';
import { TicketComponent } from './components/booking/ticket/ticket.component';
import { BusesComponent } from './components/buses/buses.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { JourneyComponent } from './components/journey/journey.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PassengerComponent } from './components/passenger/passenger.component';
// import { RegisterComponent } from './components/register/register.component';
import { RidesComponent } from './components/rides/rides.component';
import { SeatsComponent } from './components/seats/seats.component';
import { FooterComponent } from './footer/footer.component';
import { BusComponent } from './bus/bus.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightComponent } from './flight/flight.component';
import { RailwayComponent } from './railway/railway.component';
import { BusSeatComponent } from './bus-seat/bus-seat.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TicketmodelComponent } from './ticketmodel/ticketmodel.component';
import { RegisComponent } from './regis/regis.component';
import { CouponComponent } from './coupon/coupon.component';
import { MytripComponent } from './mytrip/mytrip.component';
import { RailwayBookComponent } from './railway-book/railway-book.component';
import { RailwaybookseatComponent } from './railwaybookseat/railwaybookseat.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RailwayTicketBookComponent } from './railway-ticket-book/railway-ticket-book.component';
import { RailmybookingComponent } from './railmybooking/railmybooking.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { RideComponent } from './flight/ride/ride.component';
import { FlightrideComponent } from './flight/flightride/flightride.component';
import { FlightbookComponent } from './flightbook/flightbook.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    CancelComponent,
    ChangedateComponent,
    MailComponent,
    TicketComponent,
    BusesComponent,
    DashboardComponent,
    HelpComponent,
    HomeComponent,
    JourneyComponent,
    LoginComponent,
    NavbarComponent,
    PassengerComponent,
    // RegisterComponent,
    RidesComponent,
    SeatsComponent,
    FooterComponent,
    BusComponent,
    FlightComponent,
    RailwayComponent,
    BusSeatComponent,
    MyProfileComponent,
    TicketmodelComponent,
    RegisComponent,
    CouponComponent,
    MytripComponent,
    RailwayBookComponent,
    RailwaybookseatComponent,
    RailwayTicketBookComponent,
    RailmybookingComponent,
    Navbar1Component,
    RideComponent,
    FlightrideComponent,
    FlightbookComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
