import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FactsService } from '../../services/facts.service';
import { Fact } from '../../models/fact.model';

const DEFAULT_FACT_IMG = 'https://2.bp.blogspot.com/-g4uaWVsUD5A/V35HXQ2Gu8I/AAAAAAAAKtw/LUiTD1z6g040Sne7gLQeNyoCG_AetC-awCLcB/s1600/postits.jpg';

@Component({
    moduleId: 'module.id',
    selector: 'fact-form',
    templateUrl: './fact-form.component.html',
    styleUrls: [
        './fact-form.component.css'
    ]
})
export class FactFormComponent implements OnInit {
    fact: Fact;

    constructor(private factsService: FactsService, private router: Router) { }

    ngOnInit() {
        this.fact = new Fact('', '', '');
    }

    createFact() {
        this.fact.img = this.fact.img || DEFAULT_FACT_IMG;

        let user = JSON.parse(localStorage.getItem('currentUser'));

        this.fact['addedBy'] = user['username'];
        this.factsService.createFact(this.fact).subscribe(() => {
            this.router.navigate(['facts'])
        });
    }

    return() {
        this.router.navigate(['facts'])
    }

};
