import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shanty-shack';
  sidenavOpened: boolean = true;
  sidenavMode: string = 'side';

  constructor(private ngZone: NgZone) {
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
      this.sidenavOpened = true;
      this.sidenavMode = 'side';
    } else {
      // for mobile
      this.sidenavOpened = false;
      this.sidenavMode = 'over';
    }
  }

  private openSidenavi(isopenSidenavi: boolean){
    this.sidenavOpened = isopenSidenavi;
    this.sidenavMode = 'over';
  }
}
