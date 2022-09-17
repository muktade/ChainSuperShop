import { Injectable } from '@angular/core';
import { Centralstock } from 'src/app/Models/centralstock/Centralstock.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class CentralstockService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/mainstock';

  dataUrl2 = 'http://localhost:8081/ChainSuperShopManagement/api/v1/mainstockdetails';

  centralstock: Centralstock = new Centralstock();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllCentralstock(): Observable<Centralstock[]> {
    return this.http.get<Centralstock[]>(this.dataUrl, headerOption);
  }

  getAllCentralstockDetails(): Observable<Object[]> {
    return this.http.get<Object[]>(this.dataUrl2, headerOption);
  }

  deleteCentralstock(stockid: number): Observable<Centralstock> {
    return this.http.delete<Centralstock>(this.dataUrl + '/' + stockid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createCentralstock(cstock: Centralstock): Observable<Centralstock> {
    return this.http.post<Centralstock>(this.dataUrl, cstock, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateCentralstock(cstock: Centralstock): Observable<Centralstock> {
    return this.http.put<Centralstock>(this.dataUrl + '/' + cstock.mstockid, cstock, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }
}
