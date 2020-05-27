import { SearchModule } from './../shared/components/search/search.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BooksModule } from '../books/books.module';
import { AuthorsModule } from '../authors/authors.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchModule,
    BooksModule,
    AuthorsModule,
  ]
})
export class HomeModule { }
