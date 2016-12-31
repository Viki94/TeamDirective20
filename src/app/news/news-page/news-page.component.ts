import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../../services/index';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
    newsList: any[];

    constructor(private router: Router, private newsService: NewsService) { }

    ngOnInit() {
        this.newsService.getAllArticles()
        .subscribe(articles => {
             this.newsList = articles;
        });
    }

    goToDetails(article) {
        this.router.navigate(['/news/details', article._id]);
    }
}
