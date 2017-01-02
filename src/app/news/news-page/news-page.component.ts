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
    isUserAdmin: boolean;

    constructor(private router: Router, private newsService: NewsService) { }

    ngOnInit() {
        this.isUserAdmin = !!localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))['admin'];
        this.newsService.getAllArticles()
            .subscribe(articles => {
                this.newsList = articles;
            });
    }

    goToDetails(article) {
        this.router.navigate(['/news/details', article._id]);
    }
}
