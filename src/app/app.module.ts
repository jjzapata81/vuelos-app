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
import { LoginComponent } from './login/components/login.component';
import { HttpClientModule } from '@angular/common/http';

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
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HelpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
