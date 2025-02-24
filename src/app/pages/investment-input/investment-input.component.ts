import { Component, inject, signal } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-investment-input',
  standalone: false,
  templateUrl: './investment-input.component.html',
  styleUrl: './investment-input.component.scss'
})
export class InvestmentInputComponent {

  initialInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');
  
  private investmentService = inject(InvestmentService)

  calculateInvestment() {
    this.investmentService.calculateInvestment({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    });

    // this.initialInvestment.set('0');
    // this.annualInvestment.set('0');
    // this.expectedReturn.set('0');
    // this.duration.set('0');
  }
  
}
