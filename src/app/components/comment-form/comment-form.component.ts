import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';

@Component({
    moduleId: 'module.id',
    selector: 'comment-form',
    templateUrl: './comment-form.component.html',
})
export class CommentFormComponent implements OnInit {
    comment: Comment;

    constructor(private commentsService: CommentsService, private router: Router) { }

    ngOnInit() {
        this.comment = new Comment('', '', '');
    }

    create() {
        this.comment.content = this.comment.content

        this.commentsService.create(this.comment).subscribe(()=> {
            this.router.navigate(['comments'])
        });
    }

    return() {
        this.router.navigate(['comments'])
    }

};