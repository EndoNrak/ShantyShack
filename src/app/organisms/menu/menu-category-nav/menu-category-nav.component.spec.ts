import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCategoryNavComponent } from './menu-category-nav.component';

describe('MenuCategoryNavComponent', () => {
  let component: MenuCategoryNavComponent;
  let fixture: ComponentFixture<MenuCategoryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCategoryNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCategoryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
