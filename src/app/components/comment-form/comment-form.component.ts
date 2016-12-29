import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../models/comment.model';

const DEFAULT_FACT_IMG = 'https://2.bp.blogspot.com/-g4uaWVsUD5A/V35HXQ2Gu8I/AAAAAAAAKtw/LUiTD1z6g040Sne7gLQeNyoCG_AetC-awCLcB/s1600/postits.jpg';

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
            this.router.navigate(['facts'])
        });
    }

    return() {
        this.router.navigate(['facts'])
    }

};