import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {

  @Input() cardBook;

  constructor() { }

  ngOnInit(): void {
  }

}
