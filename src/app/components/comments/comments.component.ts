import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentsService } from './../../services/comments.service';
import { Comment } from '../../models/comment.model';

@Component({
    moduleId: 'module.id',
    selector: 'comments',
    templateUrl: './comments.component.html',
})
export class CommentsComponent implements OnInit {
    model: Comment;
    comments: Comment[] = [];

    constructor(private commentsService: CommentsService, private router: Router) { }

    ngOnInit() {
        this.model = new Comment('', '', '');
        this.commentsService.getAllComments()
            .subscribe(comments => {
                this.comments = comments.map(comment => {
                    return Object.assign({}, comment, { content: comment.content})
                });
            });
    };

    addComment() {
        this.router.navigate(['comment-form']);
        console.log(this.comments);
    }
};