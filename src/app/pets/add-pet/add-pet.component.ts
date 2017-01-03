import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { PetService } from '../../services/index';

@Injectable()
@Component({
    selector: 'app-add-pet',
    templateUrl: './add-pet.component.html',
    styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
    form: FormGroup;
    notificationOptions: Object;
    isDisabled: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private notificationsService: NotificationsService,
        private petService: PetService,
        private router: Router
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [''],
            age: [''],
            gender: [''],
            breed: [''],
            pictures: [''],
            about: ['']
        });

        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    addPet(pet) {
        if (!pet.name || pet.name.length < 3 || pet.name.length > 20) {
            this.notificationsService.error('Възникна грешка!', 'Името може да бъде от 3 до 20 символа.');
            return;
        }

        if (pet.age === '' || pet.age < 0 || pet.age > 25) {
            this.notificationsService.error('Възникна грешка!', 'Възрастта може да бъде от 0 до 25 години.');
            return;
        }

        if (!pet.breed || pet.breed.length < 3 || pet.breed.length > 20) {
            this.notificationsService.error('Възникна грешка!', 'Породата може да бъде от 3 до 20 символа.');
            return;
        }

        if (!pet.pictures) {
            this.notificationsService.error('Възникна грешка!', 'Въведете линк към снимка.');
            return;
        }

        if (!pet.about || pet.about.length < 50 || pet.about.length > 5000) {
            this.notificationsService.error('Възникна грешка!', 'Описанието може да бъде от 50 до 5000 символа.');
            return;
        }

        let user = JSON.parse(localStorage.getItem('currentUser'));

        pet['addedBy'] = user['username'];
        this.petService.addPet(pet)
            .subscribe(res => {
                this.notificationsService.success('Успешно създадена обява!', 'Обратно към останалите обяви...');
                this.router.navigate(['pets/page', 1]);
            },
            err => {
                console.log(err);
                this.notificationsService.error('Възникна грешка!', 'Моля, опитайте отново.');
            });
    }
}
