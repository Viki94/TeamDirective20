import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt-a-pet',
  templateUrl: './adopt-a-pet.component.html',
  styleUrls: ['./adopt-a-pet.component.css']
})
export class AdoptAPetComponent {
    animals: any[];

    constructor(){
        this.animals = [{name: "Pesho", 
                        type: "dog", 
                        breed: "лабрадор", 
                        sex: "мъжки", 
                        years: 3, 
                        weight: 39},
                        {name: "Merida",
                         type: "cat",
                         breed: "тигър",
                         sex: "женски",
                         years: 1,
                         weight: 4}];
    }
}