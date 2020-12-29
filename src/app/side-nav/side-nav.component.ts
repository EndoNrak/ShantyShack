import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  menues = [
    {title_jpn: "トップ", title_eng: "TOP", route: "top"},
    {title_jpn: "お知らせ", title_eng: "NEWS", route: "news"},
    {title_jpn: "メニュー", title_eng: "MENU", route: "menu"},
    {title_jpn: "こだわり", title_eng: "FEATURE", route: "feature"},
    {title_jpn: "自己紹介", title_eng: "INTRODUCTION", route: ""},
    {title_jpn: "アクセス", title_eng: "ACCESS", route: ""},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
