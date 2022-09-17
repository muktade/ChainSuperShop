import { Component, OnInit, ViewChild } from '@angular/core';
import { BranchsaleService } from 'src/app/Services/branchsale/branchsale.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model'; 

@Component({
  selector: 'app-salelist',
  templateUrl: './salelist.component.html',
  styleUrls: ['./salelist.component.css']
})
export class SalelistComponent implements OnInit {

  displayedColumns: string[] = ['Branchsale ID', 'Branch ID', 'Branch Location','Sale Date', 'Sale Amount', 'Staff Email', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(
    public branchsaleservice: BranchsaleService
  ) { }

  ngOnInit(): void {
    this.getAllBranchsaleDetail();
    this.branchsaleservice.refreshNeed.subscribe(() => {
      this.getAllBranchsaleDetail();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllBranchsaleDetail(){
    this.branchsaleservice.getAllBranchsaleDetails().subscribe(
      (data: Object[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  deleteBranchsale(bsale: Branchsale) {
    this.branchsaleservice.deleteBranchsale(bsale.bsaleid).subscribe();
  }

  editBranchsale(bsale: Branchsale) {
    this.branchsaleservice.currentBranchsale = Object.assign({}, bsale);
    this.branchsaleservice.panelOpenState = !this.branchsaleservice.panelOpenState;
  }


}
