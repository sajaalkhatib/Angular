import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Myservice } from '../service/my-service.service';

@Component({
  selector: 'app-add-voucher',
  standalone: false,
  templateUrl: './add-voucher.component.html',
  styleUrl: './add-voucher.component.css'
})
export class AddVoucherComponent {


  constructor(private _ser: Myservice) { }

  ngOnInit() { }

  addVoucher(data: any) {
    this._ser.addVoucher(data).subscribe(() => {
      alert("added")

    })
  }
}
