import { Component, Injectable, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Injectable()
@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements DoCheck {
    private isLoggedIn: boolean;
    private isUserAdmin: boolean;

    constructor(private authService: AuthService, private router: Router) {
        this.isLoggedIn = this.authService.isLoggedIn;
        if (!this.isLoggedIn) {
            this.isUserAdmin = false;
        } else {
           this.isUserAdmin = !!JSON.parse(localStorage.getItem('currentUser'))['admin'];
        }
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
    }
}
