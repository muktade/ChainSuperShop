import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Purchase } from 'src/app/Models/purchase/Purchase.model';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class PurchaseService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/purchase';

  currentPurchase: Purchase = new Purchase();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllPurchase(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.dataUrl, headerOption);
  }

  deletePurchase(purid: number): Observable<Purchase> {
    return this.http.delete<Purchase>(this.dataUrl + '/' + purid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createPurchase(pur: Purchase): Observable<Purchase> {
    return this.http.post<Purchase>(this.dataUrl, pur, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updatePurchase(pur: Purchase): Observable<Purchase> {
    return this.http.put<Purchase>(this.dataUrl + '/' + pur.purid, pur, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
