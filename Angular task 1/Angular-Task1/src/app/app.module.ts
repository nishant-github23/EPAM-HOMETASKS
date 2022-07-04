import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './mycomponents/comp1/comp1.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { CardsComponent } from './mycomponents/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    NavbarComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
