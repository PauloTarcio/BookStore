import { BooksModule } from './../books/books.module';
import { CardInfoModule } from './../shared/components/card-info/card-info.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { SearchModule } from '../shared/components/search/search.module';


@NgModule({
  declarations: [ListReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    SearchModule,
    CardInfoModule,
    BooksModule,
  ]
})
export class ReservationModule { }
