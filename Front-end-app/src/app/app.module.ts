import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScooterListComponent } from './scooter-list/scooter-list.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { RentalManagerComponent } from './rental-manager/rental-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    ScooterListComponent,
    BreakdownComponent,
    RentalManagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
