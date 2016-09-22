import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent }  from './app.component';
import { HeaderMenuComponent } from '../header_menu/header.component';
import { CarouselDirective } from '../carousel/carousel.component';

import { StartComponent }  from '../content/start.component';
import { SenderComponent }  from '../content/sender.component';
import { DriverComponent }  from '../content/driver.component';
import { NotFoundComponent }  from '../content/notFound.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent,  HeaderMenuComponent, CarouselDirective, SenderComponent, DriverComponent, NotFoundComponent, StartComponent],
  bootstrap: [ AppComponent],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule {
}
