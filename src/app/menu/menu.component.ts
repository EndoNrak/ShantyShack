import { Component, OnInit } from '@angular/core';
import {MenuCategory} from '../menu-category'
import { MenuService } from '../menu.service'
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  large_categories!: MenuCategory[];
  middle_categories!: string[];
  active_large_category: number = 0;
  constructor(public menuService : MenuService) { }

  ngOnInit(): void {
    this.large_categories = this.menuService.getLargeCategoryDescriptions()
    this.getMiddleCategories(0)
  }

  // onNavChange(changeEvent: NgbNavChangeEvent) {
  //   if (changeEvent.nextId === 3) {
  //     changeEvent.preventDefault();
  //   }
  // }

  getMiddleCategories(category_id: number): void{
    this.middle_categories = this.menuService.getMiddleCategories(category_id)
  }

}
