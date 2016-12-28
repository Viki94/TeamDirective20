import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    notificationOptions: Object;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private notificationsService: NotificationsService) {
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
    }

    submit(value: any) {
        this.authService.login(value)
            .subscribe(res => {
                console.log(res);
                localStorage.setItem('currentUser', JSON.stringify(res.user));
                this.notificationsService.success('Успешен вход!', 'Пренасочване...');
            },
            err => {
                console.log(err);
                this.notificationsService.error('Възникна грешка!', 'Невалидни потребителско име и/или парола.');
            });
    }
}
