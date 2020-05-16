import { PaginationModule } from './../pagination/pagination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableInfoComponent } from './table-info/table-info.component';
import { TableInfoRoutingModule } from './table-info-routing.module';

@NgModule({
  declarations: [TableInfoComponent],
  exports: [TableInfoComponent],
  imports: [
    CommonModule,
    TableInfoRoutingModule,
    PaginationModule
  ]
})
export class TableInfoModule { }
