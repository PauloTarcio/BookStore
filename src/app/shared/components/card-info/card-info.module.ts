import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardInfoRoutingModule } from './card-info-routing.module';
import { CardInfoComponent } from './card-info/card-info.component';


@NgModule({
  declarations: [CardInfoComponent],
  exports: [CardInfoComponent],
  imports: [
    CommonModule,
    CardInfoRoutingModule
  ]
})
export class CardInfoModule { }
