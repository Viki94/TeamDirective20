import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
    newsList: any[];
    constructor(private router: Router) {
        this.newsList = Array(5);
    }

    ngOnInit() {
    }

    goToDetails() {
        this.router.navigate(['/news/details']);
    }
}
