import { Injectable } from '@angular/core';
import {MenuList} from './mock-menus'
import {MenuCategories} from './mock-menu-category'
import {MenuCategory} from './menu-category'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() { }

  getLargeCatList(): string[]{
    return Object.keys(MenuCategories)
  }

  getLargeCategoryDescriptions(): MenuCategory[]{
    return MenuCategories
  }

  getMiddleCategories(category_id: number): string[]{
    console.log("large_category_id: " + category_id)
    return MenuCategories.filter(menu_category => menu_category.id === category_id)[0].middle_categories
  }
}
