import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {

  transform(creditCard: string): string {
   const visibleDigits = 4;
   let maskedSection = creditCard.slice(0, -visibleDigits);
   let visibleSection = creditCard.slice(-visibleDigits);
   return maskedSection.replace(/./g, '*') + visibleSection;
  }

}
