import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListGenresComponent } from './list-genres/list-genres.component';
import { CrudGenreComponent } from './list-genres/crud-genre/crud-genre.component';

const routes: Routes = [
  { path: '', component: ListGenresComponent },
  { path: 'listGenres', component: ListGenresComponent },
  { path: 'crudGenre/new', component: CrudGenreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
