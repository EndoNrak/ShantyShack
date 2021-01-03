import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOverMenuComponent } from './mobile-over-menu.component';

describe('MobileOverMenuComponent', () => {
  let component: MobileOverMenuComponent;
  let fixture: ComponentFixture<MobileOverMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileOverMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOverMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
