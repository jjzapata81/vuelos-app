import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SearchComponent } from './flight/pages/search/search.component';
import { SearchBoxComponent } from './flight/components/search-box/search-box.component';
import { SearchResultComponent } from './flight/components/search-result/search-result.component';
import { PriceOptionComponent } from './flight/components/price-option/price-option.component';
import { PriceOptionsComponent } from './flight/components/price-options/price-options.component';
import { LocationTimeComponent } from './flight/controls/location-time/location-time.component';
import { HelpModule } from './help-center/help.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { BookingsComponent } from './bookings/pages/bookings/bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchComponent,
    SearchBoxComponent,
    SearchResultComponent,
    PriceOptionComponent,
    PriceOptionsComponent,
    LocationTimeComponent,
    BookingsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-5m5uom1a44djh7ax.us.auth0.com',
      clientId: 'ZZ9le3MadHmbydl7GJDgENM3RIbQTbFp',
    }),
    HelpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
