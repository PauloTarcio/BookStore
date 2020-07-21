import { CadastroBase } from 'src/app/shared/base/CadastroBase';

import { Component, OnInit, Injector } from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.css']
})
export class CrudUsersComponent extends CadastroBase implements OnInit {

  constructor(
    public injector: Injector,
    public location: Location,
  ) {super(injector, location);}

  onInit(){
    this.ngOnInit();
  }

  toCreateForm() {
    this.form = new FormGroup({
      cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      name: new FormControl('', [Validators.required])
    })
  };

  toSave(){};

}
