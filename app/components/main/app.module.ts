import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderMenuComponent } from '../header_menu/header.component';
import { CarouselDirective } from '../carousel/carousel.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,  HeaderMenuComponent, CarouselDirective],
  bootstrap: [ AppComponent]
})
export class AppModule {
}
