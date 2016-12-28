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
  isAboutShowed: boolean = true;
  isFamilyTreeShowed: boolean = true;
  isPicturesShowed: boolean = true;
  isVideosShowed: boolean = true;
  

  constructor(private petService: PetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.pets = this.petService.getAll();
    this.pet = this.petService.getById(this.route.snapshot.params['id']);
    this.url = this.route.snapshot.url;
  }

  showAbout(){
    if (this.isAboutShowed == false){
      this.isAboutShowed = true;
    }
    else{
      this.isAboutShowed = false;
    }
    this.isFamilyTreeShowed = false;
    this.isVideosShowed = false;
    this.isPicturesShowed = false;
    
    console.log(this.isAboutShowed);
  }

  showFamilyTree(){
    if (this.isFamilyTreeShowed == false){
      this.isFamilyTreeShowed = true;
    }
    else{
      this.isFamilyTreeShowed = false;
    }
    this.isAboutShowed = false;
    this.isVideosShowed = false;
    this.isPicturesShowed = false;
    
    console.log(this.isAboutShowed);
  }

  showPictures(){
    if (this.isPicturesShowed == false){
      this.isPicturesShowed = true;
    }
    else{
      this.isPicturesShowed = false;
    }
    this.isAboutShowed = false;
    this.isFamilyTreeShowed = false;
    this.isVideosShowed = false;
    
    console.log(this.isAboutShowed);
  }

    showVideos(){
    if (this.isVideosShowed == false){
      this.isVideosShowed = true;
    }
    else{
      this.isVideosShowed = false;
    }
    this.isAboutShowed = false;
    this.isFamilyTreeShowed = false;
    this.isPicturesShowed = false;
    
    console.log(this.isAboutShowed);
  }
}