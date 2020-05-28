import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-crud-genre',
  templateUrl: './crud-genre.component.html',
  styleUrls: ['./crud-genre.component.css']
})
export class CrudGenreComponent implements OnInit {

  isOnEdition = false;
  genres;
  genreForm: FormGroup;
  subscription: Subscription;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.toCreateForm();
  }

  toCreateForm() {
    this.genreForm = this.form.group({
      name: ['', Validators.required],
    })
  };

  toGetGenreInfoById() {
    this.subscription = this.route.params
    .subscribe(params => { this.genres = params.id;});
  }

  toResetForm = () => this.genreForm.reset()

  onSubmit = () => this.submitted = true;

  toCancelOperation = () => this.location.back();

  isFormInvalid = (controls: string) => this.submitted && !this.genreForm.controls[controls].value

}
