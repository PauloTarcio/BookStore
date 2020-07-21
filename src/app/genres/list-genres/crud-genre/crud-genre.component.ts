import { CadastroBase } from 'src/app/shared/base/CadastroBase';

import { Component, Injector } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-crud-genre',
  templateUrl: './crud-genre.component.html',
  styleUrls: ['./crud-genre.component.css']
})
export class CrudGenreComponent extends CadastroBase {

  genres;

  constructor(
    public injector: Injector,
    public location: Location,
  ) {super(injector, location);}

  onInit(){
    this.ngOnInit();
  }

  toCreateForm() {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required])
    })
  };

  toGetGenreInfoById() {
    this.subscription = this.route.params
    .subscribe(params => { this.genres = params.id;});
  }

  toSave(){}

}
