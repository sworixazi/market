import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsmainComponent } from './itemsmain.component';

describe('ItemsmainComponent', () => {
  let component: ItemsmainComponent;
  let fixture: ComponentFixture<ItemsmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
