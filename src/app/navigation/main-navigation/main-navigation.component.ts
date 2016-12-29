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
    private isLoggedIn;

    constructor(private authService: AuthService, private router: Router) { 
        this.isLoggedIn = this.authService.isLoggedIn;
    }

    ngDoCheck() {
       this.isLoggedIn = !!localStorage.getItem('token');
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['./home']);
    }
}
