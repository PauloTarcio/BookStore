import { SearchModule } from './../shared/components/search/search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { LastbooksComponent } from './lastbooks/lastbooks.component';
import { BookCardsComponent } from './book-cards/book-cards.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { CrudBookComponent } from './list-books/crud-book/crud-book.component';

import { TableInfoModule } from './../shared/components/table-info/table-info.module';

@NgModule({
  declarations: [LastbooksComponent, BookCardsComponent, ListBooksComponent, CrudBookComponent],
  exports:[LastbooksComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksRoutingModule,
    SearchModule,
    TableInfoModule,
  ]
})
export class BooksModule { }
