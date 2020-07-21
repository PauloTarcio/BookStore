import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBooksComponent } from './list-books/list-books.component';
import { CrudBookComponent } from './list-books/crud-book/crud-book.component';
import { LeanBooksComponent } from './lean-books/lean-books.component';
import { ReservationBooksComponent } from './reservation-books/reservation-books.component';

const routes: Routes = [

  { path: '', component: ListBooksComponent },
  { path: 'listBooks', redirectTo: '', },
  { path: 'crudBook/new', component: CrudBookComponent },
  { path: 'crudBook/:id/view', component: CrudBookComponent },
  { path: 'crudBook/:id/edit', component: CrudBookComponent },
  { path: 'listLeans', component: LeanBooksComponent },
  { path: 'listReservations', component: ReservationBooksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
