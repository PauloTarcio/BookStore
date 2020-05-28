import { GenreService } from './../../shared/services/genre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.css']
})
export class ListGenresComponent implements OnInit {

  genres;

  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.getAllGenres();
  }


  getAllGenres = () => this.genres = this.genreService.getGenres();

}
