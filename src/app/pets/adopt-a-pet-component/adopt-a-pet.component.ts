import { Component, OnInit } from '@angular/core';

import { PetService } from '../../core/services/pets.service';

@Component({
  selector: 'app-adopt-a-pet',
  templateUrl: './adopt-a-pet.component.html',
  providers:[PetService]
})
export class AdoptAPetComponent implements OnInit {
    pets: any[];

    constructor(private petService: PetService){}

    ngOnInit(){
        this.pets = this.petService.getAll();
    }
}