import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },

  { path: 'books', loadChildren: () => import('./books/books.module').then((m) => m.BooksModule) },

  { path: 'authors',  loadChildren: () => import('./authors/authors.module').then((m) => m.AuthorsModule) },

  { path: 'genres',  loadChildren: () => import('./genres/genres.module').then((m) => m.GenresModule) },

  { path: '**', component: PageNotFoundComponent  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
