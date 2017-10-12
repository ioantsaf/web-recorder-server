import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  pageId = 'Getting Started';
  headline = 'Documentation';
  serverURL = process.env.BACKEND_URL;
  websiteURL = process.env.FRONTEND_URL;

  constructor() { }

  ngOnInit() { }

  changePage(pageId: string) {
    this.pageId = pageId;

    if (pageId === 'Getting Started') {
      this.headline = 'Documentation';
    } else {
      this.headline = pageId;
    }
  }

}
