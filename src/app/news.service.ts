import { Injectable } from '@angular/core';
import {News} from './news'
import {NewsList} from './mock-news'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newsList :News[] = NewsList;
  constructor() {}

  sortNewsList(): void{
    this.newsList.sort(function(a, b) {
      if (a.id < b.id) {
        return 1;
      } else {
        return -1;
      }
    });
  }
  // getNewsList(): News[]{
  //   return this.newsList
  // }
  getNewsList(): Observable<News[]>{
    return of(NewsList)
  }

  getTopNews(): Observable<News[]>{
    return of(NewsList.slice(0, 3))
    // return this.newsList.slice(0, 3);
  }
}
