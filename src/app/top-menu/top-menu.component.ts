import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  menues = [
    {title: "whiskey", img: "../../assets/image/sec1-pt.png", route: "menu"},
    {title: "others", img: "../../assets/image/sec1-pt.png", route: "menu"},
    {title: "non-alcohol", img: "../../assets/image/sec1-pt.png", route: "menu"},
    {title: "food", img: "../../assets/image/sec1-pt.png", route: "menu"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
