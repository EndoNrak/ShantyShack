import { Component, OnInit, Input} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

import {AppComponent} from '../app.component'

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  @Input() sidenavMode: string = 'over';
  // sidenavMode: string=AppComponent.sidenavMode

  constructor() { }

  ngOnInit() {
  }

  // toggleSidenav() {
  //   this.sidenavi.toggle();
  // }

}
