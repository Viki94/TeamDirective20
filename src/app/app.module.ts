import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { ApiService, AuthService, RouteGuardService, AdminRouteGuardService, UsersService } from './services/index';
import { CampaignsService } from './services/campaigns.service';
import { FactsService } from './services/facts.service';
import { DataService } from './services/data.service';

// directives
import { EqualityValidatorDirective } from './directives/equality-validator.directive';

// pipes
import { SortByDatePipe } from './pipes/sort-by-date.pipe';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './components/campaigns/campaign.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaignCreateComponent } from './components/campaign-create/campaign-create.component';
import { CampaignPreviewComponent } from './components/campaign-preview/campaign-preview.component';
import { FactsComponent } from './components/facts/facts.component';
import { FactFormComponent } from './components/fact-form/fact-form.component';
import { MainNavigationComponent, FooterComponent } from './navigation/index';
import { RegisterComponent, LoginComponent } from './auth/index';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AddedContentComponent } from './users/added-content/added-content.component';
import { AdminComponent } from './users/admin/admin.component';

@NgModule({
    declarations: [
        EqualityValidatorDirective,
        SortByDatePipe,
        AppComponent,
        MainNavigationComponent,
        FooterComponent,
        HomeComponent,
        CampaignComponent,
        CampaignListComponent,
        CampaignCreateComponent,
        CampaignPreviewComponent,
        FactsComponent,
        FactFormComponent,
        RegisterComponent,
        LoginComponent,
        UserProfileComponent,
        AddedContentComponent,
        AdminComponent
    ],
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRoutingModule,
        SimpleNotificationsModule,
        Ng2PageScrollModule.forRoot()
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'bg-BG' },
        ApiService,
        AuthService,
        RouteGuardService,
        AdminRouteGuardService,
        CampaignsService,
        FactsService,
        DataService,
        UsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
