import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './components/campaigns/campaign.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaignCreateComponent } from './components/campaign-create/campaign-create.component';
import { CampaignPreviewComponent } from './components/campaign-preview/campaign-preview.component';
import { FactsComponent } from './components/facts/facts.component';
import { FactFormComponent } from './components/fact-form/fact-form.component';
import { RegisterComponent, LoginComponent } from './auth/index';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'campaign', component: CampaignComponent, children: [
        { path: '', redirectTo: '/campaign/list', pathMatch: 'full' },
        { path: 'list', component: CampaignListComponent },
        { path: 'create', component: CampaignCreateComponent },
        { path: 'preview/:id', component: CampaignPreviewComponent }
    ]},
    { path: 'facts', component: FactsComponent },
    { path: 'fact-form', component: FactFormComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: UserProfileComponent, canActivate: [RouteGuardService] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
