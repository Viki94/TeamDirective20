import { Component, Injectable, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements DoCheck {
    private isLoggedIn: boolean;
    private isUserAdmin: boolean;
    notificationOptions: Object;

    constructor(private authService: AuthService,
        private router: Router,
        private notificationsService: NotificationsService
    ) {
        this.isLoggedIn = this.authService.isLoggedIn;
        if (!this.isLoggedIn) {
            this.isUserAdmin = false;
        } else {
            this.isUserAdmin = !!JSON.parse(localStorage.getItem('currentUser'))['admin'];
        }

        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    ngDoCheck() {
        this.isLoggedIn = !!localStorage.getItem('token');
        if (!this.isLoggedIn) {
            this.isUserAdmin = false;
        } else {
            this.isUserAdmin = !!JSON.parse(localStorage.getItem('currentUser'))['admin'];
        }
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['./home']);
        this.notificationsService.success('Успешен изход!', 'Към началната страница...');
    }
}
