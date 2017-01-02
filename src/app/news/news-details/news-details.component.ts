import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    form: FormGroup;
    @ViewChild('commentInput') commentInput;

    constructor(
        private newsService: NewsService,
        private route: ActivatedRoute,
        private notificationsService: NotificationsService,
        private formBuilder: FormBuilder
    ) {
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };

        this.form = this.formBuilder.group({
            content: ['']
        });
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

    focusInput() {
        this.commentInput.nativeElement.focus();
    }

    submit(contentObj) {
        if (!contentObj['content'] || contentObj['content'].length < 3 || contentObj['content'].length > 200) {
            this.notificationsService.error('Възникна грешка!', 'Коментарът може да е между 3 и 200 символа.');
            return;
        }

        let author = JSON.parse(localStorage.getItem('currentUser'))['username'];

        this.newsService.postComment(this.article['_id'], author, contentObj['content'])
            .subscribe(res => {
                let comment = res.comments[res.comments.length - 1];
                this.article['comments'].push(comment);
                this.form.reset();
                this.notificationsService.success('Коментарът е записан!', 'Продължете напред...');
            },
            err => {
                console.log(err);
                this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно.');
            });
    }
}
