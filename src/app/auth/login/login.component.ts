import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../../services/auth.service';

@Injectable()
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    notificationOptions: Object;
    isDisabled = false;

    constructor(private formBuilder: FormBuilder, private authService: AuthService,
        private notificationsService: NotificationsService, private router: Router) {
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        if (!!localStorage.getItem('currentUser')) {
            this.router.navigate(['/home']);
        }
    }

    submit(value: any) {
        this.authService.login(value)
            .subscribe(res => {
                this.isDisabled = true;
                localStorage.setItem('token', res.token);
                localStorage.setItem('currentUser', JSON.stringify(res.user));
                this.notificationsService.success('Успешен вход!', 'Пренасочване...');
                setTimeout(() => {
                    this.router.navigate(['/my-profile']);
                }, 2000);
            },
            err => {
                this.isDisabled = true;
                this.notificationsService.error('Възникна грешка!', 'Невалидни потребителско име и/или парола.');
                setTimeout(() => {
                    this.isDisabled = false;
                }, 2000);
            });
    }
}
