import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FeatureComponent } from './feature/feature.component';
import { MenuComponent } from './menu/menu.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FeatureComponent,
    MenuComponent,
    MenuBarComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
