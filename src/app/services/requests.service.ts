import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class RequestsService {
    constructor(private api: ApiService) { }

    makeRequest(username, petId, petName) {
        return this.api.post('api/requests/make-request', { username, petId, petName });
    }

    getAllRequests() {
        return this.api.put('api/requests/get-all', {});
    }
}
