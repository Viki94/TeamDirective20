import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';

@Injectable()
export class AuthService {
    constructor(private api: ApiService, private http: Http) { }

    register(user: Object) {
        return this.api.post('api/auth/register', user);
    }

    login(user: Object) {
        return this.api.post('api/auth/login', user);
    }

    logout() {
        localStorage.clear();
    }

    verifyLogin() {
        let token = localStorage.getItem('token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'authorization': token
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.get('api/auth/check-login', options)
            .map((res: any) => {
                if (res.status === 200) {
                    return true;
                }

                return false;
            });
    }
}
