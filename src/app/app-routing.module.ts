import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService, AdminRouteGuardService } from './services/index';

import { HomeComponent } from './home/home.component';
import { CampaignComponent } from './components/campaigns/campaign.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaignCreateComponent } from './components/campaign-create/campaign-create.component';
import { CampaignPreviewComponent } from './components/campaign-preview/campaign-preview.component';
import { FactsComponent } from './components/facts/facts.component';
import { FactFormComponent } from './components/fact-form/fact-form.component';
import { RegisterComponent, LoginComponent } from './auth/index';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AdminComponent } from './users/admin/admin.component';
import { NewsPageComponent } from './news/news-page/news-page.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsAddArticleComponent } from './news/news-add-article/news-add-article.component';
import { PetsMainPageComponent } from './pets/pets-main-page/pets-main-page.component';
import { AddPetComponent } from './pets/add-pet/add-pet.component';
import { PetProfileComponent } from './pets/pet-profile/pet-profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'campaign', component: CampaignComponent, children: [
            { path: '', redirectTo: '/campaign/list', pathMatch: 'full' },
            { path: 'list', component: CampaignListComponent },
            { path: 'create', component: CampaignCreateComponent },
            { path: 'preview/:id', component: CampaignPreviewComponent }
        ]
    },
    { path: 'facts', component: FactsComponent },
    { path: 'fact-form', component: FactFormComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile/:id', component: UserProfileComponent },
    { path: 'my-profile', component: UserProfileComponent, canActivate: [RouteGuardService] },
    { path: 'admin', component: AdminComponent, canActivate: [AdminRouteGuardService] },
    { path: 'news/add-article', component: NewsAddArticleComponent, canActivate: [AdminRouteGuardService] },
    { path: 'news/details/:id', component: NewsDetailsComponent },
    { path: 'news/page/:page', component: NewsPageComponent },
    { path: 'pets/page/:page', component: PetsMainPageComponent },
    { path: 'pets/add', component: AddPetComponent, canActivate: [RouteGuardService] },
    { path: 'pets/profile/:id', component: PetProfileComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
