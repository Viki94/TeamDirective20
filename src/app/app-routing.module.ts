import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';

import { HomeComponent } from './home/home.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { FactsComponent } from './components/facts/facts.component';
import { FactFormComponent } from './components/fact-form/fact-form.component';
import { RegisterComponent, LoginComponent } from './auth/index';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AdminComponent } from './users/admin/admin.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'campaigns', component: CampaignsComponent },
    { path: 'campaign-form', component: CampaignFormComponent },
    { path: 'facts', component: FactsComponent },
    { path: 'fact-form', component: FactFormComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile/:id', component: UserProfileComponent },
    { path: 'my-profile', component: UserProfileComponent, canActivate: [RouteGuardService] },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
