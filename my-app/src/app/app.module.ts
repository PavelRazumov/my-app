import { UxCreditCardModule } from './ux-credit-card/ux-credit-card.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent
  ],
  imports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
