import { flatten } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service'


@Component({
  selector: 'app-mobile-over-menu',
  templateUrl: './mobile-over-menu.component.html',
  styleUrls: ['./mobile-over-menu.component.css']
})
export class MobileOverMenuComponent implements OnInit {
  isopened : boolean=false;
  menustyle: string= this.isopened? "mobile-over-menu-active" : "mobile-over-menu-unactive";

  menues = [
    {title_jpn: "トップ", title_eng: "TOP", route: "top"},
    {title_jpn: "お知らせ", title_eng: "NEWS", route: "news"},
    {title_jpn: "メニュー", title_eng: "MENU", route: "menu"},
    {title_jpn: "こだわり", title_eng: "FEATURE", route: "feature"},
    {title_jpn: "自己紹介", title_eng: "INTRODUCTION", route: "introduction"},
    {title_jpn: "アクセス", title_eng: "ACCESS", route: "access"},
  ];
  constructor(
    public navigationService: NavigationService
  ) {   }

  ngOnInit(): void {}

  public closeMobileovermenu(){
    this.navigationService.isMobileMenuOpened = false;
  }
}
