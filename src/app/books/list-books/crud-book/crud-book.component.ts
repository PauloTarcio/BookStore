import { AuthorService } from './../../../shared/services/author.service';
import { BookService } from './../../../shared/services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-crud-book',
  templateUrl: './crud-book.component.html',
  styleUrls: ['./crud-book.component.css']
})
export class CrudBookComponent implements OnInit {

  isOnEdition = false;
  book;
  authors;
  bookForm: FormGroup;
  subscription: Subscription;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
    private bookService: BookService,
    private authorService: AuthorService,
    private location: Location,
    ) { }

  ngOnInit() {
      this.toCreateForm();
  }

  toCreateForm() {
    this.bookForm = this.form.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      author: ['', Validators.required],
      pages: ['', Validators.required],
      publishcompany: ['', Validators.required],
      abstract: ['', Validators.required],
      cover: ['', Validators.required],
    })

    this.toGetAuthors();
  };

  toGetBookInfoById() {
    this.subscription = this.route.params
    .subscribe(params => { this.book = params.id;});
    this.toGetAuthors();
  }

  toResetForm = () => this.bookForm.reset()

  onFormSubmit = () => this.submitted = true;

  toCancelOperation = () => this.location.back();

  toGetAuthors = () => this.authors = this.authorService.getAuthors();

  isFormInvalid = (controls) => this.submitted && !this.bookForm.controls[controls].value

}
