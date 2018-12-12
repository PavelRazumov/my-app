import { UxCreditCardModule } from './../ux-credit-card/ux-credit-card.module';
import { CreditCardMaskPipe } from './../ux-credit-card/credit-card-mask.pipe';
import { UxCreditCardComponent } from './../ux-credit-card/ux-credit-card.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//  Component, pipe, derictives

@NgModule({
 imports:      [ CommonModule, UxCreditCardModule],
 declarations: [  UxCreditCardComponent,
                  CreditCardMaskPipe],
 exports:      [CommonModule, FormsModule ]
})
export class SharedModule { }
