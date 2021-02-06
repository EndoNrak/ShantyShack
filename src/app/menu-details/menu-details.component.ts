import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {MenuService} from '../menu.service'
import {Menu} from '../menu'

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  menu_details!: Menu[];
  @Input() active_large_category_id!: number;
  @Input() active_middle_category_id!: number;

  constructor(public menuService : MenuService) {
   }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.getMenuDetails()
  }

  getMenuDetails(): void{
    this.menu_details = this.menuService.getMenuDetails(this.active_large_category_id, this.active_middle_category_id)
  }
}
