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

    getArticlesByPage(page) {
        return this.api.put(`api/news/get-by-page/${page}`, {});
    }

    getArticleById(articleId) {
        return this.api.put('api/news/get-article', { _id: articleId });
    }

    toggleLike(articleId, username) {
        return this.api.put('api/news/toggle-like', { articleId, username });
    }

    postComment(articleId, username, content) {
        return this.api.post('api/news/post-comment', { articleId, username, content });
    }

    deleteArticle(articleId) {
        return this.api.put('api/news/remove-article', { id: articleId });
    }

    restoreArticle(articleId) {
        return this.api.put('api/news/restore-article', { id: articleId });
    }
}
