import { Component, OnInit, Injectable, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { UsersService } from '../../services/users.service';

@Injectable()
@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, DoCheck {
    users: Object;
    form: FormGroup;
    showEditUser: boolean;
    isEditedUserAdmin: boolean;
    editedUser: Object;
    notificationOptions: Object;
    isSubmitButtonDisabled: boolean;

    constructor(
        private usersService: UsersService,
        private router: Router,
        private formBuilder: FormBuilder,
        private notificationsService: NotificationsService
    ) {
        this.form = this.formBuilder.group({
            username: [''],
            firstName: [''],
            lastName: [''],
            email: [''],
            age: [null],
            gender: [''],
            profilePicture: ['']
        });

        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    ngOnInit() {
        this.showEditUser = false;
        this.usersService.getAllUsers()
            .subscribe(res => {
                this.users = res;
            });
    }

    showAddedDetails() {
        this.showEditUser = false;
        this.isEditedUserAdmin = false;
        this.editedUser = {};
    }

    showEdit(user) {
        this.showEditUser = true;
        this.editedUser = user;
        this.isEditedUserAdmin = user.admin || false;
    }

    toggleBanUser(user) {
        this.usersService.toggleBanUser(user)
            .subscribe(res => {
                let message = res.response.isDeleted ? 'деактивиран' : 'активиран';
                user.isDeleted = res.response.isDeleted;
                this.notificationsService.success('Успешна редакция!', `Профилът на ${user.username} е ${message}.`);

            },
            err => {
                console.log(err)
            });
    }

    makeAdmin() {
        this.usersService.makeUserAdmin(this.editedUser)
            .subscribe(res => {
                this.isEditedUserAdmin = true;
                this.notificationsService.success('Успешна редакция!', 'Потребителят е вече админ.');
            },
            err => {
                console.log(err);
                this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
            });
    }

    editProfileInfo(user) {
        let isValid = false,
            newData = {};
        Object.keys(user)
            .forEach(key => {
                if (user[key]) {
                    newData[key] = user[key];
                    isValid = true;
                }
            });

        if (!isValid) {
            this.notificationsService.error('Възникна грешка!', 'Не сте въвели данни!');
            return;
        }

        newData['username'] = this.editedUser['username'];
        console.log(newData);
        this.usersService.editProfile(newData)
            .subscribe(res => {
                this.form.reset();
                this.showAddedDetails();
                this.router.navigate(['/admin']);
                this.notificationsService.success('Успешна редакция!', 'Обратно към админ панела...');
            },
            err => {
                this.notificationsService.error('Възникна грешка!', 'Моля, въведете коректни данни!');
                this.isSubmitButtonDisabled = true;
                setTimeout(() => {
                    this.isSubmitButtonDisabled = false;
                }, 2000);
            });
    }

    goToDetails(user) {
        this.router.navigate(['profile', user._id]);
    }

}
