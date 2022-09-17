import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Staffdetail } from 'src/app/Models/staffdetail/Staffdetail.model';

const headerOption = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Injectable()
export class StaffdetailService {

  dataUrl = 'http://localhost:8081/ChainSuperShopManagement/api/v1/staffdetail';

  panelOpenState = false;

  currentstaff: Staffdetail = new Staffdetail();

  constructor(
    private http: HttpClient
  ) { }

  private refreshNeeded = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeded;
  }

  getAllStaffdetail(): Observable<Staffdetail[]> {
    return this.http.get<Staffdetail[]>(this.dataUrl, headerOption);
  }

  deleteStaffdetail(staffid: number): Observable<Staffdetail> {
    return this.http.delete<Staffdetail>(this.dataUrl + '/' + staffid, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  createStaffdetail(staff: Staffdetail): Observable<Staffdetail> {
    return this.http.post<Staffdetail>(this.dataUrl, staff, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

  updateStaffdetail(staff: Staffdetail): Observable<Staffdetail> {
    return this.http.put<Staffdetail>(this.dataUrl + '/' + staff.staffid, staff, headerOption).pipe(
      tap(() => {
        this.refreshNeeded.next();
      })
    );
  }

}
