import { CrudUsersComponent } from './list-users/crud-users/crud-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListUsersComponent },

  { path:'listUsers', redirectTo: ''},

  {path: 'crudUsers/new', component: CrudUsersComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
