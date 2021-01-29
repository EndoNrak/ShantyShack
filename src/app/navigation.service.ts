import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  isSideNavDisplayed: boolean = true;
  // navMode: string = 'mobile'
  isMobileNavDisplayed: boolean = false;
  isMobileMenuOpened : boolean = false;

  constructor() { }

  setWidewindowmode(){
    this.isSideNavDisplayed = true;
    this.isMobileNavDisplayed = false;
    this.isMobileMenuOpened = false;
  }

  setMobilemode(){
    this.isSideNavDisplayed = false;
    this.isMobileNavDisplayed = true;
    this.isMobileMenuOpened = false;
  }

  toggleMobilemenu(){
    this.isMobileMenuOpened = !this.isMobileMenuOpened;
  }
}
