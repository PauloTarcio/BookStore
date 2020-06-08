import { CrudLeanBookComponent } from './list-lean-book/crud-lean-book/crud-lean-book.component';
import { ListLeanBookComponent } from './list-lean-book/list-lean-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListLeanBookComponent },
  { path: 'listLeans', component: ListLeanBookComponent },
  { path: 'listLeans/crudLean/new', component: CrudLeanBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeanBookRoutingModule { }
