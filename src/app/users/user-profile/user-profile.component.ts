import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { EmailValidator, RangeValidator } from '../../auth/custom-validators/index';
import { UsersService } from '../../services/index';

@Injectable()
@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    private form: FormGroup;
    private user: Object;
    private adoptedPets: Object;
    private addedAnimals: Object;
    private addedCampaigns: Object;
    private addedFacts: Object;
    private addedGalleryImages: Object;
    private showEdit = false;
    private showEditButton = false;
    private isBtnDisabled = false;
    private notificationOptions: Object;

    constructor(
        private formBuilder: FormBuilder,
        private usersService: UsersService,
        private notificationsService: NotificationsService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.form = this.formBuilder.group({
            firstName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20)])],
            lastName: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(20)])],
            email: [''],
            age: [null, ([RangeValidator.isInRange])],
            gender: [''],
            profilePicture: ['']
        });

        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    showEditProfile() {
        this.showEdit = true;
    }

    showAddedDetails() {
        this.showEdit = false;
    }

    editProfileInfo(user: Object) {
        let isValid = false,
            newData = {};
        Object.keys(user)
            .forEach(key => {
                if (user[key] && typeof user[key] === 'string') {
                    newData[key] = user[key];
                    isValid = true;
                } else if (user[key]) {
                    newData[key] = user[key];
                    isValid = true;
                }
            });

        if (!isValid) {
            this.notificationsService.error('Възникна грешка!', 'Не сте въвели данни!');
            return;
        }

        user['username'] = JSON.parse(localStorage.getItem('currentUser'))['username'];
        this.usersService.editProfile(user)
            .subscribe(res => {
                this.showEdit = false;
                Object.keys(newData)
                    .forEach(key => {
                        this.user[key] = newData[key];
                    });
                localStorage.setItem('currentUser', JSON.stringify(this.user));
                this.form.reset();
                this.router.navigate(['/profile']);
                this.notificationsService.success('Успешна редакция!', 'Обратно към профила...');
            },
            err => {
                this.notificationsService.error('Възникна грешка!', 'Моля, въведете коректни данни!');
                this.isBtnDisabled = true;
                setTimeout(() => {
                    this.isBtnDisabled = false;
                }, 2000);
            });
    }

    ngOnInit() {
        this.route.params
            .switchMap(params => this.user = this.usersService.getUserById(params['id']))
            .subscribe(user => {
                this.user = user;
            },
            err => {
                this.user = JSON.parse(localStorage.getItem('currentUser'));
                this.showEditButton = true;
            });

        this.adoptedPets = {
            id: 'adopted-pets',
            title: 'Осиновени животни',
            nothingAddedMessage: 'Този потребител все още не е осиновил никое животно.',
            trHeadTitle: 'Име:',
            trHeadDate: 'Осиновен на:',
            list: [{
                name: 'Силвестър',
                imgUrl: 'http://d39kbiy71leyho.cloudfront.net/wp-content/uploads/2016/05/09170020/cats-politics-TN.jpg',
                addedOn: '22/12/2016'
            }]
        };

        this.addedAnimals = {
            id: 'added-animals',
            title: 'Добавени обяви',
            nothingAddedMessage: 'Този потребител все още не е добавял обяви.',
            trHeadTitle: 'Име:',
            trHeadDate: 'Добавена на:',
            list: []
        };

        this.addedCampaigns = {
            id: 'added-campaigns',
            title: 'Добавени кампании',
            nothingAddedMessage: 'Този потребител все още не е добавял кампании.',
            trHeadTitle: 'Заглавие:',
            trHeadDate: 'Добавена на:',
            list: []
        };

        this.addedFacts = {
            id: 'added-facts',
            title: 'Добавени любопитни факти',
            nothingAddedMessage: 'Този потребител все още не е добавял факти.',
            trHeadTitle: 'Заглавие:',
            trHeadDate: 'Добавен на:',
            list: []
        };

        this.addedGalleryImages = {
            id: 'added-images',
            title: 'Добавени снимки',
            nothingAddedMessage: 'Този потребител все още не е добавял снимки.',
            trHeadTitle: 'Заглавие:',
            trHeadDate: 'Добавена на:',
            list: []
        };
    }
}
