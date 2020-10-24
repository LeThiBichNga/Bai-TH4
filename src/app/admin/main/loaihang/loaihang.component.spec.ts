import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaihangComponent } from './loaihang.component';

describe('LoaihangComponent', () => {
  let component: LoaihangComponent;
  let fixture: ComponentFixture<LoaihangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaihangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaihangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
