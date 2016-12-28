import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) { }

    canActivate() {
        if (!localStorage.getItem('token')) {
            this.router.navigate(['/login']);
        }

        return this.authService.verifyLogin();
    }
}
