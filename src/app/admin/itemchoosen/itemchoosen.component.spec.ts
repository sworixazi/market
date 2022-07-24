import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemchoosenComponent } from './itemchoosen.component';

describe('ItemchoosenComponent', () => {
  let component: ItemchoosenComponent;
  let fixture: ComponentFixture<ItemchoosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemchoosenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemchoosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
