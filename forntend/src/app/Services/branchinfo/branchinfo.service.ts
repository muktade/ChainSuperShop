import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  }) 
};

@Injectable()
export class BranchinfoService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branch';

  panelOpenState = false;

  currentBranchinfo: Branchinfo = new Branchinfo();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllBranchinfo(): Observable<Branchinfo[]> {
    return this.http.get<Branchinfo[]>(this.dataUrl, headerOption);
  }

  deleteBranchinfo(branchid: number): Observable<Branchinfo> {
    return this.http.delete<Branchinfo>(this.dataUrl + '/' + branchid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createBranchinfo(branch: Branchinfo): Observable<Branchinfo> {
    return this.http.post<Branchinfo>(this.dataUrl, branch, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateBranchinfo(branch: Branchinfo): Observable<Branchinfo> {
    return this.http.put<Branchinfo>(this.dataUrl + '/' + branch.branchid, branch, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
