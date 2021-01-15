import { Component, OnInit } from '@angular/core';
import {NewsList} from '../mock-news'

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  newsList = NewsList.slice(0, 3);
  constructor() { }

  ngOnInit(): void {
  }

}
