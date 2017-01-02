import { Component, OnInit, Injectable } from '@angular/core';
import { NewsService } from '../services/index';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    newsData: any[];
    constructor(private newsService: NewsService, private router: Router) { }

    ngOnInit() {
        this.newsData = [];
        this.newsService.getArticlesByPage(1)
            .subscribe(articlesObj => {
                let articles = articlesObj.articles;

                articles.sort((a, b) => {
                    if (a.createdOn > b.createdOn) {
                        return -1;
                    }

                    if (a.createdOn < b.createdOn) {
                        return 1;
                    }

                    return 0;
                });

                this.newsData = articles.slice(0, 3);
            },
            err => {
                console.log(err);
            });
    }

    goToDetails(article) {
        this.router.navigate(['/news/details', article._id]);
    }
}
