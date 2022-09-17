import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Purchasedetail } from 'src/app/Models/purchasedetail/Purchasedetail.model';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Purchase } from 'src/app/Models/purchase/Purchase.model';
import { Product } from 'src/app/Models/product/Product.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class PurchasedetailService {


  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/purchasedetails';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1';

  currentPurchasedetail: Purchasedetail = new Purchasedetail(null, null, null, null, null, null);
  newpurchasedetail: Purchasedetail[] = [];
  panelOpenState = false;

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllPurchase(): Observable<Purchase[]> {
    return this.http.get<Purchase[]>(this.dataUrl2 + '/purchase' , headerOption);
  }

  getAllProductPurchaseDetails(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl2 + '/productpurchasedetails' , headerOption);
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl2 + '/product', headerOption);
  }

  getAllPurchasedetail(): Observable<Purchasedetail[]> {
    return this.http.get<Purchasedetail[]>(this.dataUrl, headerOption);
  }

  deletePurchasedetail(purdetid: number): Observable<Purchasedetail> {
    return this.http.delete<Purchasedetail>(this.dataUrl + '/' + purdetid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createPurchasedetail(purdet: Purchasedetail): Observable<Purchasedetail> {
    return this.http.post<Purchasedetail>(this.dataUrl, purdet, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updatePurchasedetail(purdet: Purchasedetail): Observable<Purchasedetail> {
    return this.http.put<Purchasedetail>(this.dataUrl + '/' + purdet.purdetid, purdet, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
