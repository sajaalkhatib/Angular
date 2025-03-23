import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PostVoucher {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  constructor(private _http: HttpClient) { }


  getVoucher() {

    return this._http.get<any>("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher")
  }

  addVoucher(data: any) {
    return this._http.post("https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher", data)
  }

  updateVoucher(id: any, data: any) {
    return this._http.put(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`, data)
  }

  getVoucherById(id: any) {
    return this._http.get(`https://67d9ae8e35c87309f529c67f.mockapi.io/sign/voucher/${id}`)
  }
}

  

