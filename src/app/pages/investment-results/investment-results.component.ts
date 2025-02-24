import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../../services/investment.service';
@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

 
   results = computed(() => this.investmentService.resultData());
  //results = this.investmentService.resultData();
}
