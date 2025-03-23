import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { VoucherComponent } from './voucher/voucher.component';
import { EditvoucherComponent } from './editvoucher/editvoucher.component';

const routes: Routes = [
  { path: "addvoucher", component: AddVoucherComponent },
  { path: "view", component: VoucherComponent },
  { path: 'edit/:id', component: EditvoucherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
