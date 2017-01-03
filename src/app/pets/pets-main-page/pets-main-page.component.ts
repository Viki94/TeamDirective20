import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetService } from '../../services/index';

@Injectable()
@Component({
    selector: 'app-pets-main-page',
    templateUrl: './pets-main-page.component.html',
    styleUrls: ['./pets-main-page.component.css']
})
export class PetsMainPageComponent implements OnInit {
    pets: any[];
    pagesCount: number;

    constructor(
        private petService: PetService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap(params => this.petService.getPetsByPage(+params['page']))
            .subscribe(petsObj => {
                this.pets = petsObj['pets'];
                this.pagesCount = petsObj['totalPagesCount'];
            });
    }

    goToPage(page) {
        this.router.navigate([`/pets/page/${page}`]);
    }

    goToPrev() {
        let currentPage = +this.route.snapshot.params['page'];

        if (currentPage - 1 > 0) {
            this.router.navigate(['/pets/page/', currentPage - 1]);
        }
    }

    goToNext() {
        let currentPage = +this.route.snapshot.params['page'];

        if (currentPage + 1 <= this.pagesCount) {
            this.router.navigate(['/pets/page/', currentPage + 1]);
        }
    }

    generateRange(num): any[] {
        return new Array(num);
    }
}
