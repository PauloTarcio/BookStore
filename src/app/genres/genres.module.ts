import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresRoutingModule } from './genres-routing.module';
import { ListGenresComponent } from './list-genres/list-genres.component';
import { TableInfoModule } from '../shared/components/table-info/table-info.module';
import { CrudGenreComponent } from './list-genres/crud-genre/crud-genre.component';


@NgModule({
  declarations: [ListGenresComponent, CrudGenreComponent],
  imports: [
    CommonModule,
    GenresRoutingModule,
    TableInfoModule
  ]
})
export class GenresModule { }
