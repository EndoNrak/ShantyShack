import { Component, OnInit } from '@angular/core';
import {News} from '../news'
import {NewsService} from '../news.service'

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  topNewsList!: News[];
  constructor(private newsService: NewsService) {
  }

  ngOnInit(){
    this.newsService.sortNewsList()
    this.getTopNews()
  }
  getTopNews(): void {
    this.newsService.getTopNews()
        .subscribe(newsList => this.topNewsList = newsList);
  }
}
