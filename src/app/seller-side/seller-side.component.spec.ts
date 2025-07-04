import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSideComponent } from './seller-side.component';

describe('SellerSideComponent', () => {
  let component: SellerSideComponent;
  let fixture: ComponentFixture<SellerSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
