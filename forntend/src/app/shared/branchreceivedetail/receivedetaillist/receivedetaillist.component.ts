import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ReceivedetailService } from 'src/app/Services/branchreceivedetail/receivedetail.service';

@Component({
  selector: 'app-receivedetaillist',
  templateUrl: './receivedetaillist.component.html',
  styleUrls: ['./receivedetaillist.component.css']
})
export class ReceivedetaillistComponent implements OnInit {

  displayedColumns: string[] = ['Received Detail ID','Receive ID', 'Branch ID','Branch Location','Issue ID', 'Received Date','Product name', 'Product Quantity', 'Rate(TK)'];
  dataSource: MatTableDataSource<Object>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(
    public receivedetail: ReceivedetailService
  ) { }

  ngOnInit(): void {
    this.getAllReceivedproductdeatil();
    this.receivedetail.refreshNeed.subscribe(() => {
      this.getAllReceivedproductdeatil();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllReceivedproductdeatil(){
    this.receivedetail.getAllReceivedproductwithdetail(this.receivedetail.branchid).subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }
}
