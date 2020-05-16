import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastbooksComponent } from './lastbooks/lastbooks.component';
import { ListBooksComponent } from './list-books/list-books.component';


const routes: Routes = [
  {
    path: '',
    component: LastbooksComponent,
  },
  {
    path: 'listBook',
    component: ListBooksComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
