import { Component, Input, OnInit } from '@angular/core';
// import { } from


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
    {title_jpn: "自己紹介", title_eng: "INTRODUCTION", route: ""},
    {title_jpn: "アクセス", title_eng: "ACCESS", route: ""},
  ];
  constructor() {   }

  ngOnInit(): void {
    // console.log("menu style: ");
    // console.log(this.menustyle);
  }

  public toggleMobileovermenu(){
    console.log("toggle mobileovermenu runned");
    // this.isopened = !this.isopened;
  }

  // public

}
