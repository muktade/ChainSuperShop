import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Issueproduct } from 'src/app/Models/issueproduct/Issueproduct.model';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class IssueproductService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/issueproduct';

  currentIssueproduct: Issueproduct = new Issueproduct();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllIssueproduct(): Observable<Issueproduct[]> {
    return this.http.get<Issueproduct[]>(this.dataUrl, headerOption);
  }

  deleteIssueproduct(issueid: number): Observable<Issueproduct> {
    return this.http.delete<Issueproduct>(this.dataUrl + '/' + issueid , headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createIssueproduct(issuePro: Issueproduct): Observable<Issueproduct> {
    return this.http.post<Issueproduct>(this.dataUrl, issuePro, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateIssueproduct(issuePro: Issueproduct): Observable<Issueproduct> {
    return this.http.put<Issueproduct>(this.dataUrl + '/' + issuePro.issueid, issuePro, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
