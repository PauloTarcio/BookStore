import { FormGroup, FormBuilder } from '@angular/forms';
import { OnInit, OnDestroy, Injector } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

export abstract class CadastroBase implements OnInit, OnDestroy {

  protected subscribtion = new Subscription();
  private location: Location;
  public route: ActivatedRoute;
  form: FormGroup;
  submitted
  isView = false;

  protected constructor(public injector: Injector){
    this.route = injector.get(ActivatedRoute);
  }

  ngOnInit(){}

  toSave(){}

  abstract toCreateForm();

  isFormInvalid = (controls) => this.submitted && !this.form.controls[controls].value

  toVerifyUrl = () => window.location.href.match('/view') ? this.isView = true: false;

  onFormSubmit = () => this.submitted = true

  toCancel = () => this.location.back()

  toReset = () => this.form.reset()

  ngOnDestroy = () => this.subscribtion.unsubscribe()


}
