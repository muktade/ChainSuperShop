import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }) 
};

@Injectable()
export class BranchsaleService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branchsale';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branchsaledetailsevery';

  panelOpenState = false;

  currentBranchsale: Branchsale = new Branchsale();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllBranchsaleDetails(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl2, headerOption);
  }

  getAllBranchsale(): Observable<Branchsale[]> {
    return this.http.get<Branchsale[]>(this.dataUrl, headerOption);
  }

  deleteBranchsale(branchsaleid: number): Observable<Branchsale> {
    return this.http.delete<Branchsale>(this.dataUrl + '/' + branchsaleid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createBranchsale(branchsale: Branchsale): Observable<Branchsale> {
    return this.http.post<Branchsale>(this.dataUrl, branchsale, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateBranchsale(branchdale: Branchsale): Observable<Branchsale> {
    return this.http.put<Branchsale>(this.dataUrl + '/' + branchdale.bsaleid, branchdale, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
