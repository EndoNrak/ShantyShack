import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TopComponent} from './top/top.component'
import {FeatureComponent} from './feature/feature.component'
import { NewsComponent } from './news/news.component';
import {MenuComponent} from './menu/menu.component'


const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent},
  { path: 'news', component: NewsComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'feature', component: FeatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
