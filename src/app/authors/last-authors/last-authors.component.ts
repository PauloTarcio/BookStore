import { AuthorService } from 'src/app/shared/services/author.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-authors',
  templateUrl: './last-authors.component.html',
  styleUrls: ['./last-authors.component.css']
})
export class LastAuthorsComponent implements OnInit {

  cardAuthors;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.toGetAllAuthors();
  }

  toGetAllAuthors(){
    this.cardAuthors = this.authorService.getAuthors();
  }


}
