import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Allpurchase } from 'src/app/Models/purchasereport/Allpurchase.model';

const headerOption = {
  headers: new HttpHeaders({
   'content-type': 'application/pdf',
   'responsetype': 'blob'
  })
};        

@Injectable()
export class PurchasereportService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/reportView'; 

  currentAllPurchase: Allpurchase = new Allpurchase();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>(); 

  get refreshNeed() {
    return this.refreshNeeded;
  }

  createAllPurchaseReport(title: string): Observable<Blob> {
    console.log("s start");
    var url = this.dataUrl+"?Rep_Title="+title;
    var abc = this.http.post<Blob>(url, headerOption);
    console.log("s end");

    return abc;
  }

}
