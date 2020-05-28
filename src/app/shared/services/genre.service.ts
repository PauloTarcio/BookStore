import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres = [
    {
     Id: 1,
     Name: 'Fantasy',
     Active: true
    },
    {
      Id: 2,
      Name: 'Romance',
      Active: true
    },
    {
      Id: 3,
      Name: 'Terror',
      Active: true
    },
    {
      Id: 4,
      Name: 'Science fiction',
      Active: false
    },
  ];

  constructor() { }

  getGenres () {
    return this.genres;
  }

}


