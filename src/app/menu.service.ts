import { Injectable } from '@angular/core';
import {MenuList} from './mock-menus'
import {Menu} from './menu'
import {MenuCategories} from './mock-menu-category'
import {MenuCategory} from './menu-category'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  selected_large_cat !: string;
  selected_mid_cat !: string;
  constructor() { }

  getLargeCatList(): string[]{
    return Object.keys(MenuCategories)
  }

  getLargeCategoryDescriptions(): MenuCategory[]{
    return MenuCategories
  }

  getMiddleCategories(category_id: number): string[]{
    return MenuCategories.filter(menu_category => menu_category.id === category_id)[0].middle_categories
  }

  getMenuDetails(large_cat_id: number, middle_cat_id: number): Menu[]{
    this.selected_large_cat = MenuCategories.filter(menu_cat => (menu_cat.id === large_cat_id))[0]["large_category"]
    this.selected_mid_cat = MenuCategories.filter(menu_cat => (menu_cat.large_category === this.selected_large_cat))[0]["middle_categories"][middle_cat_id]
    return MenuList.filter(menu => (menu.cat1 === this.selected_large_cat) && (menu.cat2 === this.selected_mid_cat) )
  }
}
