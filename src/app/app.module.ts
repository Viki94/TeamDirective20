import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';
import { FooterComponent } from './navigation/footer/footer.component';
import {AdoptAPetComponent} from './adoptapet/adopt-a-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    FooterComponent,
    AdoptAPetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
