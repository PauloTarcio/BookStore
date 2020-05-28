import { BookService } from './../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastbooks',
  templateUrl: './lastbooks.component.html',
  styleUrls: ['./lastbooks.component.css']
})
export class LastbooksComponent implements OnInit {

  lastbooks;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getLastBooks();
  }

  getLastBooks = () => this.lastbooks = this.bookService.getLastBooks();

  isThereDataToShow = () => this.lastbooks.length > 0;

}
