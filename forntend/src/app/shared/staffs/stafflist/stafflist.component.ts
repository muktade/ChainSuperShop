import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StaffdetailService } from 'src/app/Services/staffdetails/staffdetail.service';
import { Staffdetail } from 'src/app/Models/staffdetail/Staffdetail.model';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {

  displayedColumns: string[] = ['Staff ID', 'Branch ID', 'Name', 'DOB', 'Gender', 'Joining Date', 'Designation', 'Email', 'Address','Image', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public staffdetailservice: StaffdetailService
  ) { }

  ngOnInit(): void {
    this.getAllStaffDetail();
    this.staffdetailservice.refreshNeed.subscribe(() => {
      this.getAllStaffDetail();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  togglePanel() {
    this.staffdetailservice.panelOpenState = !this.staffdetailservice.panelOpenState
  }

  getAllStaffDetail(){
    this.staffdetailservice.getAllStaffdetail().subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  deleteStaffdetail(staff: Staffdetail) {
    this.staffdetailservice.deleteStaffdetail(staff.staffid).subscribe();
  }

  editStaffdetail(staff: Staffdetail) {
    this.staffdetailservice.currentstaff = Object.assign({}, staff);
    this.togglePanel();
  }


}
