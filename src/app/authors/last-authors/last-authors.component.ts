import { AuthorService } from 'src/app/shared/services/author.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-last-authors',
  templateUrl: './last-authors.component.html',
  styleUrls: ['./last-authors.component.css']
})
export class LastAuthorsComponent implements OnInit {

  lastAuthors;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.toGetAllAuthors();
  }

  toGetAllAuthors(){
    this.lastAuthors = this.authorService.getAuthors();
  }

  isThereDataToShow = () => this.lastAuthors.length > 0;

}
