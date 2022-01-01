import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {MenuCategory} from '../../../interfaces/menu-category'
import { MenuService } from '../../../services/menu.service'


@Component({
  selector: 'app-menu-category-nav',
  templateUrl: './menu-category-nav.component.html',
  styleUrls: ['./menu-category-nav.component.css']
})
export class MenuCategoryNavComponent implements OnInit {
  large_categories!: MenuCategory[];
  middle_categories!: string[];

  @Output() active_cat_emitter: EventEmitter<number> = new EventEmitter();
  active_large_category_id: number = 0;
  active_middle_category_id: number = 0;

  constructor(public menuService : MenuService) { }

  ngOnInit(): void {
    this.large_categories = this.menuService.getLargeCategoryDescriptions()
    this.getMiddleCategories(0)
  }

  onClickLargeCatNav(){
    this.setActiveCategory();
  }

  onClickMiddleCatNav(){
    this.setActiveCategory();
  }

  getMiddleCategories(category_id: number): void{
    this.active_middle_category_id = 0;
    this.middle_categories = this.menuService.getMiddleCategories(category_id)
  }

  setActiveCategory(){
    this.menuService.selected_large_cat = this.large_categories[this.active_large_category_id].large_category;
    this.menuService.selected_mid_cat = this.middle_categories[this.active_middle_category_id];
  }

  // sendActiveCategoryId(){
  //   this.active_cat_emitter.emit(0);
  // }

}
