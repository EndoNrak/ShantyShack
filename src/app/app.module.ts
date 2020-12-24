import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FeatureComponent } from './feature/feature.component';
import { MenuComponent } from './menu/menu.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NewsComponent } from './news/news.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FeatureComponent,
    MenuComponent,
    MenuBarComponent,
    NewsComponent,
    MobileHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
