
import { SearchModule } from './../shared/components/search/search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeanBookRoutingModule } from './lean-book-routing.module';

import { ListLeanBookComponent } from './list-lean-book/list-lean-book.component';
import { CrudLeanBookComponent } from './list-lean-book/crud-lean-book/crud-lean-book.component';
import { BooksModule } from '../books/books.module';
import { CardInfoModule } from '../shared/components/card-info/card-info.module';

@NgModule({
  declarations: [ListLeanBookComponent, CrudLeanBookComponent],
  imports: [
    CommonModule,
    LeanBookRoutingModule,
    SearchModule,
    BooksModule,
    CardInfoModule,
  ]
})
export class LeanBookModule { }
