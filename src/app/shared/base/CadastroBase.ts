import { FormGroup } from '@angular/forms';

import { OnInit, OnDestroy, Injector } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

export abstract class CadastroBase implements OnInit, OnDestroy {

  protected subscription = new Subscription();
  public route: ActivatedRoute;
  public form: FormGroup;
  submitted = false;
  isView = false;
  id;

  protected constructor(
    public injector: Injector,
    public location: Location,
    ){
    this.route = injector.get(ActivatedRoute);
  }

  ngOnInit(): void {
    this.toSubscriptionId();
    this.toCreateForm();
  }

  abstract toSave()

  abstract toCreateForm();

  toSubscriptionId = () =>this.subscription = this.route.params.subscribe(params => this.id = params.id);

  isFormInvalid = (controls) => this.submitted && !this.form.controls[controls].value;

  toVerifyUrl = ()=> window.location.href.match('/view') ? this.isView = true : false;

  toSubmit = () => this.submitted = true;

  toCancel = () => this.location.back();

  toReset = () => this.form.reset();

  ngOnDestroy = () => this.subscription.unsubscribe();

}
