import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-added-content',
    templateUrl: './added-content.component.html',
    styleUrls: ['./added-content.component.css']
})
export class AddedContentComponent implements OnInit {
    @Input() options: Object;

    constructor() { }

    ngOnInit() {
    }

}
