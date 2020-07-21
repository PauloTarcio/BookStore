import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';

import { CPFMaskPipe } from './pipes/cpfmask.pipe';

@NgModule({
  declarations: [CPFMaskPipe],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  exports: [ModalModule],
  providers: [BsModalRef]
})
export class SharedModuleModule { }
