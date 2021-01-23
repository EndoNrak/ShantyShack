import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TopComponent} from './top/top.component'
import {FeatureComponent} from './feature/feature.component'
import { NewsComponent } from './news/news.component';
import {MenuComponent} from './menu/menu.component'
import {IntroductionComponent} from './introduction/introduction.component'
import {AccessComponent} from './access/access.component'
import {NewsDetailComponent} from './news-detail/news-detail.component'


const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent},
  { path: 'news', component: NewsComponent},
  { path: 'news-detail/:id', component: NewsDetailComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'feature', component: FeatureComponent},
  { path: 'access', component: AccessComponent},
  { path: 'introduction', component: IntroductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
