import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksModule } from './../books/books.module';
import { AuthorsModule } from './../authors/authors.module';
import { IndexComponent } from './index/index.component';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    BooksModule,
    AuthorsModule,
  ]
})
export class IndexModule { }
