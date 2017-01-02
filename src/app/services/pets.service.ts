import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Pet } from './../models/pet.model';
import { ApiService } from './api.service';

@Injectable()
export class PetsService {

    constructor(private apiService: ApiService) {
    }

    getAllPets() {
        return this.apiService.put('api/pets/get-all', {});
    }

    getPetById(id: number) {
        return this.apiService.put(`api/pets/${id}`, {});
    }

    create(pet: Comment): Observable<any> {
        return this.apiService.post('api/pets/create-pet', pet);
    }
};