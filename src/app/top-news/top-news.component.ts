import { Component, OnInit } from '@angular/core';
import {News} from '../news'
import {NewsService} from '../news.service'

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  newsList!: News[];
  constructor(private newsServie: NewsService) {
  }

  ngOnInit(): void {
    this.newsList = this.newsServie.getTopNews()
  }
}
