import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnItemComponent } from './an-item.component';

describe('AnItemComponent', () => {
  let component: AnItemComponent;
  let fixture: ComponentFixture<AnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
