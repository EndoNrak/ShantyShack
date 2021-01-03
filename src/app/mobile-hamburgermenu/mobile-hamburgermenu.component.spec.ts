import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHamburgermenuComponent } from './mobile-hamburgermenu.component';

describe('MobileHamburgermenuComponent', () => {
  let component: MobileHamburgermenuComponent;
  let fixture: ComponentFixture<MobileHamburgermenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHamburgermenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHamburgermenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
