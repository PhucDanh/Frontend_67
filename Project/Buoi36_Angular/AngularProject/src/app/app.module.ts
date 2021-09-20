import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Content } from './Exe1/ex1-content/content.component';
import { Ex1Footer } from './Exe1/ex1-footer/footer.component';
// import { Header } from "./header/header.component"
import { Ex1Header } from "./Exe1/ex1-header/header.component";
import { Ex1Home } from './Exe1/ex1-home/home.component';
import { Ex1Sidebar } from './Exe1/ex1-sidebar/sidebar.component';
import { DemoDatabindingComponent } from './demo-databinding/demo-databinding.component';
import { FormsModule } from "@angular/forms";
import { DemoDirectivesComponent } from './demo-directives/demo-directives.component';
import { Exe2Component } from './Exe2/exe2.component'
import { Exe3Component } from './Exe3/exe3.component';
import { StudentItemComponent } from './demo-inout/student-item/student-item.component';
import { StudentListComponent } from './demo-inout/student-list/student-list.component';
import { Exe4Component } from './Exe4/exe4.component';
import { BookingComponent } from './Exe4/booking/booking.component';
import { SeatComponent } from './Exe4/seat/seat.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Header,
    Ex1Content,
    Ex1Sidebar,
    Ex1Footer,
    Ex1Home,
    DemoDatabindingComponent,
    DemoDirectivesComponent,
    Exe2Component,
    Exe3Component,
    StudentItemComponent,
    StudentListComponent,
    Exe4Component,
    BookingComponent,
    SeatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
