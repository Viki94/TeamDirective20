import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import {AdoptAPetComponent} from './pets/adopt-a-pet-component/adopt-a-pet.component';
import {PetProfileComponent} from './pets/pet-profile-component/pet-profile.component';
=======
import { FactsComponent } from './components/facts/facts.component';
import { FactFormComponent } from './components/fact-form/fact-form.component';
import { RegisterComponent, LoginComponent } from './auth/index';
>>>>>>> refs/remotes/origin/master

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
<<<<<<< HEAD
    { path: 'animals/adopt', component: AdoptAPetComponent},
    { path: 'animals/:id', component: PetProfileComponent},
    { path: 'animals/:id/about', component: PetProfileComponent},
    { path: 'animals/:id/familytree', component: PetProfileComponent},
    { path: 'animals/:id/pictures', component: PetProfileComponent},
    { path: 'animals/:id/videos', component: PetProfileComponent}
=======
    { path: 'facts', component: FactsComponent },
    { path: 'fact-form', component: FactFormComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
>>>>>>> refs/remotes/origin/master
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
