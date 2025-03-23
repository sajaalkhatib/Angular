import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Myservice } from '../service/my-service.service';

@Component({
  selector: 'app-editvoucher',
  standalone: false,
  templateUrl: './editvoucher.component.html',
  styleUrl: './editvoucher.component.css'
})
export class EditvoucherComponent {
  constructor(private _url: Myservice, private _active: ActivatedRoute) {

  }
  voucherContainer: any
  ngOnInit() {
    let voucher = this._active.snapshot.paramMap.get("id");
    this._url.getVoucherById(voucher).subscribe((data: any) => {

      this.voucherContainer = data
    })


  }
  voucherId: any
 
  updateVoucher(data: any) {
    this.voucherId = this._active.snapshot.paramMap.get("id");
    this._url.updateVoucher(this.voucherId, data).subscribe(() => {
      alert("update Successfully")
    })



  }
}
