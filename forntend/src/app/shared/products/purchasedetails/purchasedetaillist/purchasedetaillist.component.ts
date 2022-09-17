import { Component, OnInit, ViewChild } from '@angular/core';
import { Purchasedetail } from 'src/app/Models/purchasedetail/Purchasedetail.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PurchasedetailService } from 'src/app/Services/purchasedetail/purchasedetail.service';

@Component({
  selector: 'app-purchasedetaillist',
  templateUrl: './purchasedetaillist.component.html',
  styleUrls: ['./purchasedetaillist.component.css']
})
export class PurchasedetaillistComponent implements OnInit {

  displayedColumns: string[] = ['Detail ID', 'Purchase ID', 'Product Name','Qauntity', 'Unit Price','SubTotal', 'Date', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private purchasedetailService: PurchasedetailService
  ) { }

  ngOnInit(): void {
    this.getAllProductPurchaseDetails();
    this.purchasedetailService.refreshNeed.subscribe(() => {
      this.getAllProductPurchaseDetails();
    });
  }

  togglePanel() {
    this.purchasedetailService.panelOpenState = !this.purchasedetailService.panelOpenState
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // getAllPurchasedetail(){
  //   this.purchasedetailService.getAllPurchasedetail().subscribe(
  //     (data: Purchasedetail[]) => {
  //       this.dataSource= new MatTableDataSource (data);
  //       this.dataSource.paginator = this.paginator;
  //     }
  //   );
  // }

  getAllProductPurchaseDetails(){
    this.purchasedetailService.getAllProductPurchaseDetails().subscribe(
      (data: Object[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  deletePurchasedetail(purdet: Purchasedetail) {
    this.purchasedetailService.deletePurchasedetail(purdet[2].purdetid).subscribe();
  }

  editPurchasedetail(purdet: Purchasedetail) {
    this.togglePanel();
    this.purchasedetailService.currentPurchasedetail = Object.assign({}, purdet);
  }

}
