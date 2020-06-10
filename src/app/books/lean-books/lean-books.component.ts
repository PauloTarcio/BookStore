import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lean-books',
  templateUrl: './lean-books.component.html',
  styleUrls: ['./lean-books.component.css']
})
export class LeanBooksComponent implements OnInit {

  books;

  constructor() { }

  ngOnInit(): void {
  }

}
