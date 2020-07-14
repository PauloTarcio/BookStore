import { SearchComponent } from './../shared/components/search/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { CrudBookComponent } from './list-books/crud-book/crud-book.component';

import { TableInfoModule } from './../shared/components/table-info/table-info.module';
import { LeanBooksComponent } from './lean-books/lean-books.component';
import { ReservationBooksComponent } from './reservation-books/reservation-books.component';

@NgModule({
  declarations: [BookCardsComponent, ListBooksComponent, CrudBookComponent, LeanBooksComponent, ReservationBooksComponent, SearchComponent],
  exports:[BookCardsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    TableInfoModule,
  ],
})
export class BooksModule { }
