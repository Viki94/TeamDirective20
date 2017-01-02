import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {
    constructor(private api: ApiService) { }

    getUserById(userId) {
        return this.api.put('api/users/get-user', { id: userId });
    }

    getAllUsers() {
        return this.api.put('api/users/get-all-users', {});
    }

    getUserByUsername(username) {
        return this.api.put('api/users/get-user-by-username', { username });
    }

    makeUserAdmin(user) {
        return this.api.put('api/users/make-admin', user);
    }

    toggleBanUser(user) {
        return this.api.put('api/users/toggle-ban-user', user);
    }

    editProfile(userData: Object) {
        if ((userData['firstName'] && (userData['firstName'].length < 3 || userData['firstName'].length > 20)) ||
            (userData['lastName'] && (userData['lastName'].length < 3 || userData['lastName'].length > 20)) ||
            (userData['age'] && (userData['age'] < 6 || userData['age'] > 100))) {
            return Observable.throw(new Error('Invalid data!'));
        }

        return this.api.put('api/users/edit-profile', userData);
    }
}
