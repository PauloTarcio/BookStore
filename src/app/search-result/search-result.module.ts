import { BookCardsComponent } from './../books/book-cards/book-cards.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultComponent } from './search-result/search-result.component';


@NgModule({
  declarations: [SearchResultComponent, BookCardsComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule
  ]
})
export class SearchResultModule { }
