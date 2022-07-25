import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInListComponent } from './item-in-list.component';

describe('ItemInListComponent', () => {
  let component: ItemInListComponent;
  let fixture: ComponentFixture<ItemInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
