import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-entry',
  templateUrl: './news-entry.component.html',
  styleUrls: ['./news-entry.component.css']
})
export class NewsEntryComponent implements OnInit {
@Input() data: Object;

  constructor() { }

  ngOnInit() {
  }

}
