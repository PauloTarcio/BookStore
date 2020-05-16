import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LastAuthorsComponent } from './last-authors/last-authors.component';

const routes: Routes = [
  {
    path: '',
    component: LastAuthorsComponent,
  },
  {
    path: 'listAuthor',
    component: ListAuthorsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
