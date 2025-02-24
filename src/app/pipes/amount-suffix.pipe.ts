import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountSuffix',
  standalone: false
})
export class AmountSuffixPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    let input = Number(value);

    if(args[0] == 'million') {
      return (input/1000).toFixed(2) + 'M';
    } else {
      return input;
    }
  }

}
