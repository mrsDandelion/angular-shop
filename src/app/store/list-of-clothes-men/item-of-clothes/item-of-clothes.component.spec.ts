import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOfClothesComponent } from './item-of-clothes.component';

describe('ItemOfClothesComponent', () => {
  let component: ItemOfClothesComponent;
  let fixture: ComponentFixture<ItemOfClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemOfClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOfClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
