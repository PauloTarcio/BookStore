import { LastAuthorsComponent } from './last-authors/last-authors.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsCardComponent } from './authors-card/authors-card.component';
import { ListAuthorsComponent } from './list-authors/list-authors.component';
import { TableInfoModule } from '../shared/components/table-info/table-info.module';
import { CrudAuthorComponent } from './list-authors/crud-author/crud-author.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LastAuthorsComponent, AuthorsCardComponent, ListAuthorsComponent, CrudAuthorComponent],
  exports: [LastAuthorsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthorsRoutingModule,
    TableInfoModule
  ]
})
export class AuthorsModule { }
