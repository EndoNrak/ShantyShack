import { Component, OnInit } from '@angular/core';
import {MenuCategory} from '../menu-category'
import { MenuService } from '../menu.service'
import {Menu} from '../menu'
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  large_categories!: MenuCategory[];
  middle_categories!: string[];
  active_large_category_id=0;
  active_middle_category_id=0;
  menu_details!: Menu[];
  constructor(public menuService : MenuService) { }

  ngOnInit(): void {
    this.large_categories = this.menuService.getLargeCategoryDescriptions()
    this.getMiddleCategories(0)
  }

  getMiddleCategories(category_id: number): void{
    this.active_middle_category_id = 0;
    this.middle_categories = this.menuService.getMiddleCategories(category_id)
  }
}
