import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service'

@Component({
  selector: 'app-mobile-hamburgermenu',
  templateUrl: './mobile-hamburgermenu.component.html',
  styleUrls: ['./mobile-hamburgermenu.component.css']
})
export class MobileHamburgermenuComponent implements OnInit {

  constructor(
    public navigationService: NavigationService
    ) { }

  ngOnInit(): void {
  }

  toggleMobilemenu(){
    console.log('hamburger menu button pushed');
    this.navigationService.toggleMobilemenu();
  }
}
