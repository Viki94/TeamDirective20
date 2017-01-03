import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../services/index';

@Component({
    selector: 'app-pet-profile',
    templateUrl: './pet-profile.component.html',
    styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
    pet: Object;
    image: Object;
    notificationOptions: Object;

    constructor(private petService: PetService, private route: ActivatedRoute) { 
         this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    ngOnInit() {
        this.pet = {};
        this.image = {};

        let petId = this.route.snapshot.params['id'];
        this.petService.getPetById(petId)
            .subscribe(res => {
                console.log(res);
                this.pet = res;
                this.image = {
                    title: res.name,
                    _id: petId,
                    imgUrl: res.pictures[0]
                };
            },
            err => {
                console.log(err);
            });
    }

    goToProfile(username) {
        console.log(username)
    }

}
