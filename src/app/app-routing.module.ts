import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {AdoptAPetComponent} from './pets/adopt-a-pet-component/adopt-a-pet.component';
import {PetProfileComponent} from './pets/pet-profile-component/pet-profile.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'animals/adopt', component: AdoptAPetComponent},
    { path: 'animals/:id', component: PetProfileComponent},
    { path: 'animals/:id/about', component: PetProfileComponent},
    { path: 'animals/:id/familytree', component: PetProfileComponent},
    { path: 'animals/:id/pictures', component: PetProfileComponent},
    { path: 'animals/:id/videos', component: PetProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
