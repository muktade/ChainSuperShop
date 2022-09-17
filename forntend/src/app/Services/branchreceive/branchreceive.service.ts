import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Receivedproduct } from 'src/app/Models/branchreceiveproduct/Receivedproduct.model';
import { tap } from 'rxjs/operators';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class BranchreceiveService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/receiveproduct';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/issueproductpendingbybranchid';

  dataUrl3 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/receivedproductlistwithissuedetails';

  
  currentReceivedproduct: Receivedproduct = new Receivedproduct();

  panelOpenState = false;
  branchid: number = 1;

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }


  getAllPendingReceivedproduct(branchid: number): Observable<Object[]> {
    return this.http.get<Issueproductdetail[]>(this.dataUrl2 + '/' + branchid, headerOption);
  }

  getAllReceivedproductwithissuedetail(branchid: number): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl3 + '/' + branchid, headerOption);
  }

  getAllReceivedproduct(): Observable<Receivedproduct[]> {
    return this.http.get<Receivedproduct[]>(this.dataUrl, headerOption);
  }

  deleteReceivedproduct(recid: number): Observable<Receivedproduct> {
    return this.http.delete<Receivedproduct>(this.dataUrl + '/' + recid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createReceivedproduct(receiveproduct: Receivedproduct): Observable<Receivedproduct> {
    return this.http.post<Receivedproduct>(this.dataUrl, receiveproduct, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateReceivedproduct(receiveproduct: Receivedproduct): Observable<Receivedproduct> {
    return this.http.put<Receivedproduct>(this.dataUrl + '/' + receiveproduct.recid, receiveproduct, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
