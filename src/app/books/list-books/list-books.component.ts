import { BookService } from './../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  books;

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    return this.books = this._bookService.getBooks();
  }

}
