import { Injectable, signal } from '@angular/core';
import { UserType } from '../model/user-input.type';
import { InvestmentResults } from '../model/investment-results-type';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
   resultData = signal<InvestmentResults[] | undefined>(undefined);
  //resultData : InvestmentResults[]| undefined = undefined;
  // private resultDataSubject = new BehaviorSubject<any[]>([]);
  // resultData$ = this.resultDataSubject.asObservable();

  calculateInvestment(userInput: UserType) {
    const annualData = [];
    let investmentValue = userInput.initialInvestment;

    for (let i = 0; i < userInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (userInput.expectedReturn / 100);
      investmentValue += interestEarnedInYear + userInput.annualInvestment;
      const totalInterest =
        investmentValue -
        userInput.annualInvestment * year -
        userInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: userInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          userInput.initialInvestment + userInput.annualInvestment * year,
      });
    }
    this.resultData.set(annualData);
  }
}
