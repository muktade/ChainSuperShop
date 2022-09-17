import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model';
import { Branchsaledetail } from 'src/app/Models/branchsaleDetail/Branchsaledetail.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }) 
};

@Injectable()
export class BranchsaledetailService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branchsaledetail';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branchsaledetail/upbranchstock';

  dataUrl3 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/upbranchstockforup';

  dataUrl4 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/upbranchstockfordel';

  panelOpenState = false;

  currentBranchsaledetail: Branchsaledetail = new Branchsaledetail(null, null, null, null, null);
  
  newBranchsaleDetail: Branchsaledetail[] = [];

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllBranchsaledetail(): Observable<Branchsaledetail[]> {
    return this.http.get<Branchsaledetail[]>(this.dataUrl, headerOption);
  }

  deleteBranchsaledetail(branchsaleid: number): Observable<Branchsaledetail> {
    return this.http.delete<Branchsaledetail>(this.dataUrl + '/' + branchsaleid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createBranchsaledetail(branchsale: Branchsaledetail): Observable<Branchsaledetail> {
    console.log(this.dataUrl);
    return this.http.post<Branchsaledetail>(this.dataUrl, branchsale, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateBranchsaledetail(branchdaledetail: Branchsaledetail): Observable<Branchsaledetail> {
    return this.http.put<Branchsaledetail>(this.dataUrl + '/' + branchdaledetail.bsaledetid, branchdaledetail, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }


  upbstockforinsert(branchdaledetail: Branchsaledetail): Observable<Branchsaledetail> {
    console.log(this.dataUrl2);
    return this.http.put<Branchsaledetail>(this.dataUrl2, branchdaledetail, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
  upbstockforupdate(branchdaledetail: Branchsaledetail): Observable<Branchsaledetail> {
    return this.http.put<Branchsaledetail>(this.dataUrl3, branchdaledetail, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
  // upbstockfordelete(branchdaledetail: Branchsaledetail): Observable<Branchsaledetail> {
  //   return this.http.put<Branchsaledetail>(this.dataUrl4, branchdaledetail, headerOption).pipe(
  //     tap(() => {
  //       this.refreshNeeded.next();
  //     })
  //   );
  // }
}
