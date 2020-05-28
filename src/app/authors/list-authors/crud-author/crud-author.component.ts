import { AuthorService } from 'src/app/shared/services/author.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-crud-author',
  templateUrl: './crud-author.component.html',
  styleUrls: ['./crud-author.component.css']
})
export class CrudAuthorComponent implements OnInit {

  isOnEdition = true;
  author;
  authorForm: FormGroup;
  subscription: Subscription;
  submitted = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authroService: AuthorService,
    private form: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.toCreateForm();
  }

  toCreateForm() {
    this.authorForm = this.form.group({
      name: ['', Validators.required],
      sex: ['', Validators.required],
      photo: ['', Validators.required],
    })
  };

  toResetForm = () => this.authorForm.reset()

  onSubmit = () => this.submitted = true

  toCancelOperation = () => this.location.back();

  isFormInvalid = (controls) => this.submitted && !this.authorForm.controls[controls].value



}
