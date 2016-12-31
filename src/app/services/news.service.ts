import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class NewsService {
    constructor(private api: ApiService) { }

    addArticle(article) {
        return this.api.post('api/news/add-article', article);
    }

    getAllArticles() {
        return this.api.put('api/news/articles', {});
    }

    getArticleById(articleId) {
        return this.api.put('api/news/get-article', { _id: articleId });
    }
}
