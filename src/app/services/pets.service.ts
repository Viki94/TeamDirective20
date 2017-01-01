import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Pet } from './../models/pet.model';
import { ApiService } from './api.service';

@Injectable()
export class PetsService {

    constructor(private apiService: ApiService) {
    }

    getAllPets() {
        return this.apiService.get('api/pets/get-all');
    }

    create(pet: Comment): Observable<any>{
        return this.apiService.post('api/pets/create-pet', pet);
    }
};