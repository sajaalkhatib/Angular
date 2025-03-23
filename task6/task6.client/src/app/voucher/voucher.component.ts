import { Component } from '@angular/core';
import { Myservice } from '../service/my-service.service';

@Component({
  selector: 'app-voucher',
  standalone: false,
  templateUrl: './voucher.component.html',
  styleUrl: './voucher.component.css'
})
export class VoucherComponent {
  Voucher: any;
  constructor(private service: Myservice) { }

  ngOnInit() {
    this.gitAllVoucher();
  }

  gitAllVoucher() {
    this.service.getVoucher().subscribe((data) => {
      this.Voucher = data;
    })
  }
}


