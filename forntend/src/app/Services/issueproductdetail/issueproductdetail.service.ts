import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class IssueproductdetailService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/issuedetails';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/issueproductdetailwithproductandbranch';

  currentIssueproductdetail: Issueproductdetail = new Issueproductdetail();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllIssueproductdetail(): Observable<Issueproductdetail[]> {
    return this.http.get<Issueproductdetail[]>(this.dataUrl, headerOption);
  }

  getAllIssueproductdetailwithproduct(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl2, headerOption);
  }

  deleteIssueproductdetail(issuedetid: number): Observable<Issueproductdetail> {
    return this.http.delete<Issueproductdetail>(this.dataUrl + '/' + issuedetid , headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createIssueproductdetail(issueProDet: Issueproductdetail): Observable<Issueproductdetail> {
    return this.http.post<Issueproductdetail>(this.dataUrl, issueProDet, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateIssueproductdetail(issueProDet: Issueproductdetail): Observable<Issueproductdetail> {
    return this.http.put<Issueproductdetail>(this.dataUrl + '/' + issueProDet.issuedetid, issueProDet, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
