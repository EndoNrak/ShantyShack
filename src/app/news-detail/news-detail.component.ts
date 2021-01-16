import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {News} from '../news'

import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  //"is not assignable to type Observable"への暫定的な処置
  news: News | undefined;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getNews()
  }

  getNews(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.newsService.getNews(id)
      .subscribe(news => this.news = news);
  }

}
