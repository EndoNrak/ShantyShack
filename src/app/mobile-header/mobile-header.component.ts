import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  constructor(
    // public mobileOvermenu: MobileOverMenuComponent
    ) { }

  ngOnInit(): void {
    // console.log(this.mobileOvermenu.isopened);
  }

  toggleMobileovermenu(){
    console.log('hamburger menu button pushed');
    // this.mobileOvermenu.toggleMobileovermenu();

  }

}
