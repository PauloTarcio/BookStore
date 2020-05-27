import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/services/author.service';

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styleUrls: ['./list-authors.component.css']
})
export class ListAuthorsComponent implements OnInit {

  authors;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    return this.authors = this.authorService.getAuthors();
  }

}
