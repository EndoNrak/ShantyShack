import { Component, OnInit } from '@angular/core';
import {News} from '../news'
import {NewsService} from '../news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList!: News[];
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.sortNewsList();
    this.getNewsList();
  }

  getNewsList(){
    this.newsService.getNewsList()
    .subscribe(newsList => this.newsList = newsList);
  }

}
