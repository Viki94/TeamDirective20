import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminRouteGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if (!localStorage.getItem('currentUser') || !JSON.parse(localStorage.getItem('currentUser'))['admin']) {
            this.router.navigate(['/home']);
        }

        return this.authService.isUserAdmin();
    }
}
