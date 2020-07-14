import { AuthorService } from './../../../shared/services/author.service';
import { Component, Injector } from '@angular/core';
import { CadastroBase } from 'src/app/shared/base/CadastroBase';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crud-book',
  templateUrl: './crud-book.component.html',
  styleUrls: ['./crud-book.component.css']
})
export class CrudBookComponent extends CadastroBase {

  book;
  bookId;
  authors;

  constructor(
    private authorService: AuthorService,
    public injector: Injector,
  ) {super(injector);}

  ngOnInit() {
    // this.toGetAuthors();
    // this.toSubscribeBook();
    if (this.isView) {
      this.toSubscribeBook();
    } else {
      this.toCreateForm();
    }
  }

  toCreateForm() {
    this.form = new FormGroup({
      name: new FormControl(['', Validators.required]),
      genre: new FormControl(['', Validators.required]),
      author: new FormControl(['', Validators.required]),
      pages: new FormControl(['', Validators.required]),
      publishcompany: new FormControl(['', Validators.required]),
      abstract: new FormControl(['', Validators.required]),
      cover: new FormControl(['', Validators.required]),
    })
  };

  toSubscribeBook = () => this.route.params.subscribe(params => this.bookId = params.id);

  // toGetBookInformation = () => this.bookService.getBookById(this.bookId).subscribe(response => {this.book = response;});

  toGetAuthors = () => this.authors = this.authorService.getAuthors()


}
