import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FactsService } from './../../services/facts.service';
import { Fact } from '../../models/fact.model';

const DEFAULT_FACT_IMG = 'https://2.bp.blogspot.com/-g4uaWVsUD5A/V35HXQ2Gu8I/AAAAAAAAKtw/LUiTD1z6g040Sne7gLQeNyoCG_AetC-awCLcB/s1600/postits.jpg';

@Component({
    moduleId: 'module.id',
    selector: 'facts',
    templateUrl: './facts.component.html',
    styleUrls: [
        './facts.component.css'
    ]
})
export class FactsComponent implements OnInit {
    model: Fact;
    facts: Fact[] = [];

    constructor(private factsService: FactsService, private router: Router) { }

    ngOnInit() {
        this.model = new Fact('', '', '');
        this.factsService.getAll()
            .subscribe(facts => {
                this.facts = facts.map(fact => {
                    return Object.assign({}, fact, { img: fact.img || DEFAULT_FACT_IMG })
                });
            });
    };

    addFact() {
        this.router.navigate(['fact-form']);
    }
};
