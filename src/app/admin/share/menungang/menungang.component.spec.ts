import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenungangComponent } from './menungang.component';

describe('MenungangComponent', () => {
  let component: MenungangComponent;
  let fixture: ComponentFixture<MenungangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenungangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenungangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
