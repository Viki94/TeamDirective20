import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { NewsService } from '../../services/index';

@Injectable()
@Component({
    selector: 'app-news-add-article',
    templateUrl: './news-add-article.component.html',
    styleUrls: ['./news-add-article.component.css']
})
export class NewsAddArticleComponent implements OnInit {
    form: FormGroup;
    isDisabled: boolean;
    notificationOptions: Object;

    constructor(
        private newsService: NewsService,
        private formBuilder: FormBuilder,
        private router: Router,
        private notificationsService: NotificationsService
    ) {
        this.notificationOptions = {
            timeOut: 2000,
            showProgressBar: false,
            animate: 'fromRight'
        };
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: [''],
            content: [''],
            imgUrl: ['']
        });
    }

    addArticle(article) {
        if (!article.title || article.title.length < 5 || article.title.length > 100) {
            this.notificationsService.error('Възникна грешка!', 'Заглавието трябва да е между 5 е 100 символа.');
            return;
        }

        if (!article.imgUrl) {
            this.notificationsService.error('Възникна грешка!', 'Моля, въведете линк към снимка.');
            return;
        }

        if (!article.content || article.content.length < 5 || article.content.length > 20000) {
            this.notificationsService.error('Възникна грешка!', 'Съдържанието трябва да е между 50 е 20000 символа.');
            return;
        }

        let user = JSON.parse(localStorage.getItem('currentUser'));
        article['author'] = user.username;
        article['isDeleted'] = false;
        this.newsService.addArticle(article)
            .subscribe(res => {
                this.isDisabled = true;
                this.router.navigate(['/news/page/1']);
                this.notificationsService.success('Статията създадена!', 'Обратно към всички статии...');
                console.log(res);
            },
            err => {
                console.log(err);
                this.isDisabled = true;
                this.notificationsService.error('Възникна грешка!', 'Моля, опитайте по-късно!');
                setTimeout(() => {
                    this.isDisabled = false;
                }, 2000);
            });
    }
}
