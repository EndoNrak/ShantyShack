import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor() { }
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = ["../assets/image/top-casks.jpg",
            "../assets/image/2016-02-08.jpg",
            "../assets/image/2016_shanty - 1.jpg"]

  ngOnInit(): void {
  }

}
