import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Fact } from './../models/fact.model';
import { ApiService } from './api.service';

@Injectable()
export class FactsService {

    constructor(private apiService: ApiService) {
    }

    getAllFacts() {
        return this.apiService.get('api/facts/get-all-facts');
    }

    createFact(fact: Fact): Observable<any>{
        return this.apiService.post('api/facts/create-fact', fact);
    }
};
