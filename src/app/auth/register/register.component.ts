import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../../services/auth.service';
import { EmailValidator, RangeValidator } from '../custom-validators/index';

@Injectable()
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;
    notificationOptions: Object;
    isDisabled: boolean;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private notificationsService: NotificationsService,
        private router: Router
    ) {
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
            confirmPassword: ['', Validators.required],
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
            lastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
            email: ['', Validators.compose([Validators.required, EmailValidator.isValidMailFormat])],
            age: ['', ([Validators.required, RangeValidator.isInRange])],
            gender: ['', Validators.required]
        });
    }

    submit(value: any) {
        this.authService.register(this.form.value)
            .subscribe(res => {
                this.isDisabled = true;
                this.notificationsService.success('Регистрацията е успешна!', 'Пренасочване...');
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);
            }, err => {
                this.isDisabled = true;
                if (err.status === 400) {
                    this.notificationsService.error('Възникна грешка!', 'Моля, въведете коректни данни!');
                } else if (err.status === 409) {
                    this.notificationsService.error('Възникна грешка!', 'Потребителското име е вече заето!');
                } else {
                    this.notificationsService.error('Възникна грешка!', 'Моля, опитайте опитайте по-късно.');
                }

                setTimeout(() => {
                    this.isDisabled = false;
                }, 2000);
            });
    }
}
