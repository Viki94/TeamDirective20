import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> refs/remotes/origin/master
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { ApiService, AuthService } from './services/index';
import { FactsService } from './services/facts.service';
import { DataService } from './services/data.service';

// directives
import { EqualityValidatorDirective } from './directives/equality-validator.directive';

// components
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { MainNavigationComponent } from './navigation/main-navigation/main-navigation.component';
import { FooterComponent } from './navigation/footer/footer.component';

import { AdoptAPetComponent } from './pets/adopt-a-pet-component/adopt-a-pet.component';
import { PetProfileComponent } from './pets/pet-profile-component/pet-profile.component';

=======
>>>>>>> refs/remotes/origin/master
import { HomeComponent } from './home/home.component';
import { FactsComponent } from './components/facts/facts.component';
import { FactFormComponent } from './components/fact-form/fact-form.component';
import { MainNavigationComponent, FooterComponent } from './navigation/index';
import { RegisterComponent, LoginComponent } from './auth/index';

@NgModule({
<<<<<<< HEAD
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
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
    declarations: [
        EqualityValidatorDirective,
        AppComponent,
        MainNavigationComponent,
        FooterComponent,
        HomeComponent,
        FactsComponent,
        FactFormComponent,
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        SimpleNotificationsModule
    ],
    providers: [
        ApiService,
        AuthService,
        FactsService,
        DataService
    ],
    bootstrap: [AppComponent]
>>>>>>> refs/remotes/origin/master
})
export class AppModule { }
