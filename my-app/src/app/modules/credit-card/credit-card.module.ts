import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UxCreditCardComponent } from './name.component';

@NgModule({
  imports: [CommonModule],
  exports: [UxCreditCardComponent, UxCreditCardPipe],
  declarations: [UxCreditCardComponent, UxCreditCardPipe],
  providers: [],
})
export class UxCreditCardModule { }
