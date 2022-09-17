import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Receiveproductdetail } from 'src/app/Models/branchreceivedetail/Receiveproductdetail.model';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Branchstock } from 'src/app/Models/branchstock/Branchstock.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class ReceivedetailService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/pendingreceivedproductlist';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/receivedetail';

  dataUrl3 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/receivedetailwithproductlist';

  dataUrl4 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/dynamicinsertbstock';

  currentReceivedproductdetail: Receiveproductdetail = new Receiveproductdetail();
  currentBranchstock: Branchstock = new Branchstock();
  
  branchid: number = 1;
  panelOpenState = false;

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllPendingReceivedproductwithdetail(branchid: number): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl + '/' + branchid, headerOption);
  }

  getAllReceivedproductwithdetail(branchid: number): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl3 + '/' + branchid, headerOption);
  }

  getAllReceivedproductdetail(): Observable<Receiveproductdetail[]> {
    return this.http.get<Receiveproductdetail[]>(this.dataUrl2, headerOption);
  }

  deleteReceiveproductdetail(recdetid: number): Observable<Receiveproductdetail> {
    return this.http.delete<Receiveproductdetail>(this.dataUrl2 + '/' + recdetid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createReceiveproductdetail(receiveproductdet: Receiveproductdetail): Observable<Receiveproductdetail> {
    return this.http.post<Receiveproductdetail>(this.dataUrl2, receiveproductdet, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateReceiveproductdetail(receiveproductdet: Receiveproductdetail): Observable<Receiveproductdetail> {
    return this.http.post<Receiveproductdetail>(this.dataUrl2 + '/' + receiveproductdet.recdetid, receiveproductdet, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  dynamicInsertBranchstock(branchstock: Branchstock): Observable<Branchstock>{
    return this.http.post<Branchstock>(this.dataUrl4, branchstock, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
