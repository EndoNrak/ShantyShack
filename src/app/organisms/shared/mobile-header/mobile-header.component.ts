import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../services/navigation.service'

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  MenuButtonStyle: string = "sp_menu_button";
  constructor(
    public navigationService: NavigationService
    ) { }

  ngOnInit(): void {
    // console.log(this.mobileOvermenu.isopened);
  }

  toggleMobilemenu(){
    console.log('hamburger menu button pushed');
    this.navigationService.toggleMobilemenu();
    this.MenuButtonStyle = this.navigationService.isMobileMenuOpened? "sp_menu_button": "sp_menu_button_opened";
  }

}
