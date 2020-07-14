
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { CrudUsersComponent } from './list-users/crud-users/crud-users.component';

import { CardInfoComponent } from './../shared/components/card-info/card-info/card-info.component';

@NgModule({
  declarations: [ListUsersComponent, CrudUsersComponent, CardInfoComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
