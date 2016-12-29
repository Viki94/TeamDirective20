import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { ApiService, AuthService } from './services/index';
import { FactsService } from './services/facts.service';
import { DataService } from './services/data.service';
import {CommentsService} from './services/comments.service';

// directives
import { EqualityValidatorDirective } from './directives/equality-validator.directive';

// components
import { AppComponent } from './app.component';

import { AdoptAPetComponent } from './pets/adopt-a-pet-component/adopt-a-pet.component';
import { PetProfileComponent } from './pets/pet-profile-component/pet-profile.component';

import { HomeComponent } from './home/home.component';
import { FactsComponent } from './components/facts/facts.component';
import { FactFormComponent } from './components/fact-form/fact-form.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { MainNavigationComponent, FooterComponent } from './navigation/index';
import { RegisterComponent, LoginComponent } from './auth/index';

@NgModule({
    declarations: [
        EqualityValidatorDirective,
        AppComponent,
        MainNavigationComponent,
        FooterComponent,
        HomeComponent,
        FactsComponent,
        FactFormComponent,
        CommentsComponent,
        CommentFormComponent,
        RegisterComponent,
        LoginComponent,
        AdoptAPetComponent,
        PetProfileComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        SimpleNotificationsModule,
        CommonModule,
    ],
    providers: [
        ApiService,
        AuthService,
        FactsService,
        DataService,
        CommentsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
