import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Comment } from './../models/comment.model';
import { ApiService } from './api.service';

@Injectable()
export class CommentsService {

    constructor(private apiService: ApiService) {
    }

    getAllComments() {
        return this.apiService.get('api/comments/get-all');
    }

    create(comment: Comment): Observable<any>{
        return this.apiService.post('api/comments/create-comment', comment);
    }
};