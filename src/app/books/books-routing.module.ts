import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBooksComponent } from './list-books/list-books.component';
import { CrudBookComponent } from './list-books/crud-book/crud-book.component';

const routes: Routes = [
  { path: '', component: ListBooksComponent },
  { path: 'listBooks', component: ListBooksComponent },
  { path: 'crudBook/new', component: CrudBookComponent },
  { path: 'crudBook/:id', component: CrudBookComponent },
  { path: 'crudBook/:id/edit', component: CrudBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
