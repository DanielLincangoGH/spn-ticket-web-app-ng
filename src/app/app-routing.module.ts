import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpnTicketsAdminComponent } from './spn-tickets-admin/spn-tickets-admin.component';


const routes: Routes = [
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
  { path: 'tickets', component: SpnTicketsAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
