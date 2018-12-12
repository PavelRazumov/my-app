import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ux-credit-card',
  templateUrl: './ux-credit-card.component.html',
  styleUrls: ['./ux-credit-card.component.less']
})
export class UxCreditCardComponent implements OnInit {
  creditCardNumber: string;

  constructor() { }

  ngOnInit() {
    this.creditCardNumber = '12345678';
  }

}
