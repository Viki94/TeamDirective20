import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PetsService } from '../../services/pets.service';
import { Pet } from '../../models/pet.model';

@Component({
  selector: 'pet-profile',
  templateUrl: './pet-profile.component.html',
  providers: [PetsService]
})
export class PetProfileComponent implements OnInit {

  model: Pet;
  pet: Pet;
  url: any[];
  isAboutShowed: boolean = true;
  isFamilyTreeShowed: boolean = true;
  isPicturesShowed: boolean = true;
  isVideosShowed: boolean = true;


  constructor(private petService: PetsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.model = new Pet('', '', '', '');
    this.petService.getPetById(this.route.snapshot.params['id'])
      .subscribe(pet => {
        this.pet = pet
        console.log(this.pet)
      });
    console.log(this.pet);
    this.url = this.route.snapshot.url;
  }

  showAbout() {
    if (this.isAboutShowed == false) {
      this.isAboutShowed = true;
    }
    else {
      this.isAboutShowed = false;
    }
    this.isFamilyTreeShowed = false;
    this.isVideosShowed = false;
    this.isPicturesShowed = false;

    console.log(this.isAboutShowed);
  }

  showFamilyTree() {
    if (this.isFamilyTreeShowed == false) {
      this.isFamilyTreeShowed = true;
    }
    else {
      this.isFamilyTreeShowed = false;
    }
    this.isAboutShowed = false;
    this.isVideosShowed = false;
    this.isPicturesShowed = false;

    console.log(this.isAboutShowed);
  }

  showPictures() {
    if (this.isPicturesShowed == false) {
      this.isPicturesShowed = true;
    }
    else {
      this.isPicturesShowed = false;
    }
    this.isAboutShowed = false;
    this.isFamilyTreeShowed = false;
    this.isVideosShowed = false;

    console.log(this.isAboutShowed);
  }

  showVideos() {
    if (this.isVideosShowed == false) {
      this.isVideosShowed = true;
    }
    else {
      this.isVideosShowed = false;
    }
    this.isAboutShowed = false;
    this.isFamilyTreeShowed = false;
    this.isPicturesShowed = false;

    console.log(this.isAboutShowed);
  }

  like(id){
    this.pet.posts[id].likes.push({});
  }

  addComment(comment,id){
    this.pet.posts[id].comments.push({content:comment});
  }
}