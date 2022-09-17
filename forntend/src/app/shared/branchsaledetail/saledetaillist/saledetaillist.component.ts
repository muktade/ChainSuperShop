import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BranchsaledetailService } from 'src/app/Services/branchsaledetail/branchsaledetail.service';
import { Branchsaledetail } from 'src/app/Models/branchsaleDetail/Branchsaledetail.model';

@Component({
  selector: 'app-saledetaillist',
  templateUrl: './saledetaillist.component.html',
  styleUrls: ['./saledetaillist.component.css']
})
export class SaledetaillistComponent implements OnInit {

  displayedColumns: string[] = ['Branchsale Detail ID', 'Branchsale ID', 'Product ID', 'Sale Quantity','Sale Rate', 'Subtotal', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public branchsaledetailservice: BranchsaledetailService
  ) { }

  ngOnInit(): void {
    this.getAllBranchsaleDetail();
    this.branchsaledetailservice.refreshNeed.subscribe(() => {
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
    this.branchsaledetailservice.getAllBranchsaledetail().subscribe(
      (data: Object[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  deleteBranchsaledetail(bsale: Branchsaledetail) {
    //this.ubstock(bsale);
    this.branchsaledetailservice.deleteBranchsaledetail(bsale.bsaledetid).subscribe();
  }

  // ubstock(bsale: Branchsaledetail) {
  //   this.branchsaledetailservice.upbstockfordelete(bsale).subscribe();
  // }

  editBranchsaledetail(bsale: Branchsaledetail) {
    this.branchsaledetailservice.currentBranchsaledetail = Object.assign({}, bsale);
    this.branchsaledetailservice.panelOpenState = !this.branchsaledetailservice.panelOpenState;
  }


}
