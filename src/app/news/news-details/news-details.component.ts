import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { NewsService } from '../../services/index';

@Injectable()
@Component({
    selector: 'app-news-details',
    templateUrl: './news-details.component.html',
    styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
    article: Object;
    constructor(private newsService: NewsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.article = {};
        this.route.params
            .switchMap(params => this.newsService.getArticleById(params['id']))
            .subscribe(article => {
                this.article = article[0];
            });
    }
}
