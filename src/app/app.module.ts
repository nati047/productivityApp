import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CanbanComponent } from './canban/canban.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarComponent,
    CanbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
