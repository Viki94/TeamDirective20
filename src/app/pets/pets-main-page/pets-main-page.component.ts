import { Component, OnInit, Injectable } from '@angular/core';
import { PetService } from '../../services/index';

@Injectable()
@Component({
    selector: 'app-pets-main-page',
    templateUrl: './pets-main-page.component.html',
    styleUrls: ['./pets-main-page.component.css']
})
export class PetsMainPageComponent implements OnInit {
    pets: any[];
    image: Object;
    constructor(private petService: PetService) { }

    ngOnInit() {
        this.petService.getPetsByPage(1)
            .subscribe(petsObj => {
                this.pets = petsObj['pets'];
            });
    }
}
