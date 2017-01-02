import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetsService } from './../../services/pets.service';
import { Pet } from '../../models/pet.model';

@Component({
    moduleId: 'module.id',
    selector: 'pets',
    templateUrl: './pets.component.html',
})
export class PetsComponent implements OnInit {
    model: Pet;
    pets: Pet[] = [];

    constructor(private petsService: PetsService, private router: Router) { }

    ngOnInit() {
        this.model = new Pet('', '', '','');
        this.petsService.getAllPets()
            .subscribe(pets => {
                console.log(pets);
                this.pets = pets.map(pet => {
                    return Object.assign({}, pet, { content: pet.content})
                });
            });
    };

    addComment() {
        this.router.navigate(['comment-form']);
        console.log(this.pets);
    }
};