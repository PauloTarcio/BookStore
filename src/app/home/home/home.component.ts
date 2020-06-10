import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service';
import { AuthorService } from 'src/app/shared/services/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books;
  authors;

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
    ) { }

  ngOnInit() {
    this.getLastBooks();
    this.toGetAllAuthors();
  }

  getLastBooks = () => this.books = this.bookService.getLastBooks();

  toGetAllAuthors = () => this.authors = this.authorService.getAuthors();

  isThereDataToShow = () => this.books.length > 0;

  isThereAuthorToShow = () => this.authors.length > 0;
}
