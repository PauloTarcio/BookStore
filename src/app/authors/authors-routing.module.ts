import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudAuthorComponent } from './list-authors/crud-author/crud-author.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';

const routes: Routes = [
  { path: '', component: ListAuthorsComponent },
  { path: 'listAuthors', component: ListAuthorsComponent },
  { path: 'crudAuthor/new', component: CrudAuthorComponent },
  { path: 'crudAuthor/:id/view', component: CrudAuthorComponent },
  { path: 'crudAuthor/:id/edit', component: CrudAuthorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
