import { Component, OnInit } from '@angular/core';
import { CommonModule }     from '@angular/common';
import {ActivatedRoute} from '@angular/router';

import { PetService } from '../../core/services/pets.service';

@Component({
  selector: 'pet-profile',
  templateUrl: './pet-profile.component.html',
  providers:[PetService]
})
export class PetProfileComponent implements OnInit {

  pets: any[] = [];
  pet: any;
  url: any[];

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pets = this.petService.getAll();
    this.pet = this.petService.getById(this.route.snapshot.params['id']);
    this.url = this.route.snapshot.url;
  }
}