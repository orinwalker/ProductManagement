import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInvalidComponent } from './product-invalid.component';

describe('ProductInvalidComponent', () => {
  let component: ProductInvalidComponent;
  let fixture: ComponentFixture<ProductInvalidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductInvalidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
