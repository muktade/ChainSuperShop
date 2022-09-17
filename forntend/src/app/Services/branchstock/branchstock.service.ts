import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Branchstock } from 'src/app/Models/branchstock/Branchstock.model';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model';


const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class BranchstockService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branchstock';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branchstockdetails';

  branchstock: Branchstock = new Branchstock();
  branchid: number = 1;

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllBranchstock(): Observable<Branchstock[]> {
    return this.http.get<Branchstock[]>(this.dataUrl, headerOption);
  }

  getAllBranchstockDetails(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl2, headerOption);
  }

  getAllBranchstockDetailsbyBid(bid: number): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl2 +'/byid/'+ bid, headerOption);
  }

  getAllBranchsaleIDsbyBid(bid: number): Observable<Branchsale[]> {
    return this.http.get<Branchsale[]>(this.dataUrl2 +'/bsale/'+ bid, headerOption);
  }

  deleteBranchstock(stockid: number): Observable<Branchstock> {
    return this.http.delete<Branchstock>(this.dataUrl + '/' + stockid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createBranchstock(bstock: Branchstock): Observable<Branchstock> {
    return this.http.post<Branchstock>(this.dataUrl, bstock, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateBranchstock(bstock: Branchstock): Observable<Branchstock> {
    return this.http.put<Branchstock>(this.dataUrl + '/' + bstock.bstockid, bstock, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
