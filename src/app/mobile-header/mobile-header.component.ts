import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service'

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {

  constructor(
    public navigationService: NavigationService
    ) { }

  ngOnInit(): void {
    // console.log(this.mobileOvermenu.isopened);
  }

  toggleMobilemenu(){
    console.log('hamburger menu button pushed');
    this.navigationService.toggleMobilemenu();
  }

}
