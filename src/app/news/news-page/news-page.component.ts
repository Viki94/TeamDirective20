import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/index';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
    newsList: any[];
    isUserAdmin: boolean;
    pagesCount: number;

    constructor(private router: Router, private route: ActivatedRoute, private newsService: NewsService) { }

    ngOnInit() {
        this.isUserAdmin = !!localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'))['admin'];
        this.route.params
            .switchMap(params => this.newsService.getArticlesByPage(+params['page']))
            .subscribe(articlesObj => {
                this.newsList = articlesObj.articles;
                this.pagesCount = articlesObj.totalPagesCount;
            });
    }

    goToDetails(article) {
        this.router.navigate(['/news/details', article._id]);
    }

    goToPage(page) {
        this.router.navigate([`/news/page/${page}`]);
    }

    goToPrev() {
        let currentPage = +this.route.snapshot.params['page'];

        if (currentPage - 1 > 0) {
            this.router.navigate(['/news/page/', currentPage - 1]);
        }
    }

    goToNext() {
        let currentPage = +this.route.snapshot.params['page'];

        if (currentPage + 1 <= this.pagesCount) {
            this.router.navigate(['/news/page/', currentPage + 1]);
        }
    }

    generateRange(count): any[] {
        return new Array(count);
    }
}
