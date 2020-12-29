import { Component, NgZone } from '@angular/core';
import {NavigationService } from './navigation.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shanty-shack';

  constructor(private ngZone: NgZone,
              public navigationService: NavigationService) {
    window.onresize = () => {
      ngZone.run(() => {
        this.handleResizeWindow(window.innerWidth);
      });
    };
  }

  ngOnInit() {
    this.handleResizeWindow(window.innerWidth);
  }

  private handleResizeWindow(width: number) {
    if (700 < width) {
      // for wide screen
      this.navigationService.setWidewindowmode();
    } else {
      // for mobile
      this.navigationService.setMobilemode();
    }
  }
}
