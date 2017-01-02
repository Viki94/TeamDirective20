import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { NewsService } from '../../services/index';

@Injectable()
@Component({
    selector: 'app-news-details',
    templateUrl: './news-details.component.html',
    styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
    article: Object;
    isLiked: boolean;
    isLoggedIn: boolean;
    currentUser: Object;
    notificationOptions: Object;

    constructor(
        private newsService: NewsService,
        private route: ActivatedRoute,
        private notificationsService: NotificationsService
    ) {
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    ngOnInit() {
        this.article = {
            likes: []
        };
        this.route.params
            .switchMap(params => this.newsService.getArticleById(params['id']))
            .subscribe(article => {
                this.article = article[0];
                if (this.article['likes'].includes(this.currentUser['username'])) {
                    this.isLiked = true;
                }
            });

        if (localStorage.getItem('currentUser')) {
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }

        this.isLoggedIn = !!this.currentUser;
    }

    toggleLike() {
        let articleId = this.article['_id'],
            username = this.currentUser['username'];
        this.newsService.toggleLike(articleId, username)
            .subscribe(res => {
                if (!this.article['likes'].includes(username)) {
                    this.article['likes'].push(username);
                    this.isLiked = true;
                    this.notificationsService.success('Харесахте статията!', 'Може да промените гласа си.');
                } else {
                    let index = this.article['likes'].indexOf(username);
                    this.article['likes'].splice(index, 1);
                    this.isLiked = false;
                    this.notificationsService.success('Не харесвате статията.', 'Може да промените гласа си.');
                }
            },
            err => {
                this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
                console.log(err);
            });
    }
}
