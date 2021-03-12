import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGridItemComponent } from './list-grid-item.component';

describe('ListGridItemComponent', () => {
  let component: ListGridItemComponent;
  let fixture: ComponentFixture<ListGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
