import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';
import { FooterComponent } from './navigation/footer/footer.component';

import {AdoptAPetComponent} from './pets/adopt-a-pet-component/adopt-a-pet.component';
import {PetProfileComponent} from './pets/pet-profile-component/pet-profile.component';

import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    FooterComponent,
    AdoptAPetComponent,
    HomeComponent,
    PetProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
