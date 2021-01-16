import { Component, OnInit } from '@angular/core';
import {NewsList} from '../mock-news'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsList = NewsList;
  constructor() { }

  ngOnInit(): void {
  }

}
