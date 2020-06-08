import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListReservationComponent } from './list-reservation/list-reservation.component';


const routes: Routes = [
  { path: '', component: ListReservationComponent },
  { path: 'listReservations', component: ListReservationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
