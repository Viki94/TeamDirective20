import { Component } from '@angular/core';

@Component({
  selector: 'app-adopt-a-pet',
  templateUrl: './adopt-a-pet.component.html',
  styleUrls: ['./adopt-a-pet.component.css']
})
export class AdoptAPetComponent {
    titles: string;

    constructor(){
        this.titles = "Pesho";
    }
}