import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service';

@Injectable()
export class PetService {
    constructor(private api: ApiService) { }

    getPetsByPage(page) {
        return this.api.put(`api/pets/get-by-page/${page}`, {});
    }

    addPet(pet) {
        return this.api.post('api/pets/add-pet', { pet });
    }

    getPetById(petId) {
        return this.api.put('api/pets/get-pet', { id: petId });
    }
}
