import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ApiService } from './api.service';

@Injectable()
export class AuthService {
    constructor(private api: ApiService) { }

    register(user: Object) {
        return this.api.post('api/auth/register', user);
    }

    login(user: Object) {
        return this.api.post('api/auth/login', user);
    }
}
