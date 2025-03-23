import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddVoucherComponent } from './add-voucher/add-voucher.component';
import { VoucherComponent } from './voucher/voucher.component';
import { EditvoucherComponent } from './editvoucher/editvoucher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddVoucherComponent,
    VoucherComponent,
    EditvoucherComponent
  
    
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
