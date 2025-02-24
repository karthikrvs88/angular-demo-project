import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentInputComponent } from './investment-input.component';

describe('InvestmentInputComponent', () => {
  let component: InvestmentInputComponent;
  let fixture: ComponentFixture<InvestmentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
