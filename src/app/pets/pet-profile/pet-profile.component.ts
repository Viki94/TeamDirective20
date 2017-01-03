import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService, UsersService, RequestsService } from '../../services/index';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-pet-profile',
    templateUrl: './pet-profile.component.html',
    styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
    pet: Object;
    image: Object;
    notificationOptions: Object;
    canEdit: boolean;
    isLoggedIn: boolean;
    @ViewChild('addPhotoInput') addPhotoInput;
    isRequested: boolean;

    constructor(
        private petService: PetService,
        private route: ActivatedRoute,
        private router: Router,
        private usersService: UsersService,
        private notificationsService: NotificationsService,
        private requestsService: RequestsService
    ) {
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
                this.pet = res;
                this.image = {
                    title: res.name,
                    _id: petId,
                    imgUrl: res.pictures[0]
                };

                if (localStorage.getItem('currentUser')) {
                    this.canEdit = (JSON.parse(localStorage.getItem('currentUser'))['username'] === this.pet['addedBy']) ||
                        JSON.parse(localStorage.getItem('currentUser'))['admin'];
                    this.isLoggedIn = true;
                    this.requestsService.getAllRequests()
                        .subscribe(requests => {
                            requests.forEach(req => {
                                if (req.username === JSON.parse(localStorage.getItem('currentUser'))['username']) {
                                    this.isRequested = true;
                                }
                            });
                        });
                }
            },
            err => {
                console.log(err);
                this.router.navigate(['home']);
            });
    }

    adoptPet(pet) {
        let username = JSON.parse(localStorage.getItem('currentUser'))['username'],
            petId = this.pet['_id'],
            petName = this.pet['name'];

        this.requestsService.makeRequest(username, petId, petName)
            .subscribe(res => {
                this.notificationsService.success('Успешна заявка', 'Администраторите ще се свържат с Вас.');
                this.isRequested = true;
            },
            err => {
                this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
            });
    }

    addPhoto() {
        let petId = this.pet['_id'];
        let photoUrl = this.addPhotoInput.nativeElement.value;
        this.petService.addPhotoToPetProfile(petId, photoUrl)
            .subscribe(res => {
                this.notificationsService.success('Успешно добавена снимка!', 'Обратно към профила...');
                this.pet = res;
            },
            err => {
                this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
            });
        this.addPhotoInput.nativeElement.value = '';
    }

    goToProfile(username) {
        this.usersService.getUserByUsername(username)
            .subscribe(res => {
                this.router.navigate(['profile', res._id]);
            });
    }
}
