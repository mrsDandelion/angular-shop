import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisibilityItemsComponent } from './visibility-items.component';

describe('VisibilityItemsComponent', () => {
  let component: VisibilityItemsComponent;
  let fixture: ComponentFixture<VisibilityItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisibilityItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisibilityItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
