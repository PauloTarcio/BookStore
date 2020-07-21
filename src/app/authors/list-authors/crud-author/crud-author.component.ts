import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Location} from '@angular/common';
import { CadastroBase } from 'src/app/shared/base/CadastroBase';

@Component({
  selector: 'app-crud-author',
  templateUrl: './crud-author.component.html',
  styleUrls: ['./crud-author.component.css']
})
export class CrudAuthorComponent extends CadastroBase {

  author;

  constructor(
    public injector: Injector,
    public location: Location,
  ) {super(injector, location);}

  onInit(){
    this.ngOnInit();
  }

  toCreateForm() {
    this.form = new FormGroup({
      name: new FormControl(['', Validators.required]),
      sex: new FormControl(['', Validators.required]),
      photo: new FormControl(['', Validators.required]),
    })
  };

  toSave(){};

}
