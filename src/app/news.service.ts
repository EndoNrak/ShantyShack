import { Injectable } from '@angular/core';
import {News} from './news'
import {NewsList} from './mock-news'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsList :News[] = NewsList;
  constructor() { this.sortNewsList()}

  sortNewsList(){
    this.newsList.sort(function(a, b) {
      if (a.id < b.id) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  getNewsList(): News[]{
    return this.newsList
  }

  getTopNews(): News[]{
    return this.newsList.slice(0, 3);
  }
}
