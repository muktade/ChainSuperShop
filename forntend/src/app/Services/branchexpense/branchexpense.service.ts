import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Branchexpense } from 'src/app/Models/branchexpense/Branchexpense.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};


@Injectable()
export class BranchexpenseService {
  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/branchexpense';

  panelOpenState = false;

  currentBexpense: Branchexpense = new Branchexpense();
  
  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllBranchexpense(): Observable<Branchexpense[]> {
    return this.http.get<Branchexpense[]>(this.dataUrl, headerOption);
  }

  deleteBranchexpense(branchid: number): Observable<Branchexpense> {
    return this.http.delete<Branchexpense>(this.dataUrl + '/' + branchid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createBranchexpense(bexp: Branchexpense): Observable<Branchexpense> {
    return this.http.post<Branchexpense>(this.dataUrl, bexp, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateBranchexpense(bexp: Branchexpense): Observable<Branchexpense> {
    return this.http.put<Branchexpense>(this.dataUrl + '/' + bexp.bexpid, bexp, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
