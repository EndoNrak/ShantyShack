import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FeatureComponent } from './feature/feature.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import {MobileOverMenuComponent} from './mobile-over-menu/mobile-over-menu.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MobileHamburgermenuComponent } from './mobile-hamburgermenu/mobile-hamburgermenu.component';
import { AccessComponent } from './access/access.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component'

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FeatureComponent,
    MenuComponent,
    NewsComponent,
    MobileOverMenuComponent,
    MobileHeaderComponent,
    SideNavComponent,
    MobileHamburgermenuComponent,
    AccessComponent,
    IntroductionComponent,
    TopNewsComponent,
    NewsDetailComponent,
    FooterComponent,
    TopMenuComponent,
    MenuDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    LayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
