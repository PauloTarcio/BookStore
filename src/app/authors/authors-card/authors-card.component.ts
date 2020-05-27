import { AuthorService } from 'src/app/shared/services/author.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-authors-card',
  templateUrl: './authors-card.component.html',
  styleUrls: ['./authors-card.component.css']
})
export class AuthorsCardComponent implements OnInit {

  @Input() author;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
  }



}
