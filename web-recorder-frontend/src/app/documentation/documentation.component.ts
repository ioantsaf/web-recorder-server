import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  pageId = 'Getting Started';
  headline = 'Documentation';
  serverURL = environment.backendUrl;
  websiteURL = environment.frontendUrl;

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
