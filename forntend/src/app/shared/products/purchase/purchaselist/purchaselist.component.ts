import { Component, OnInit, ViewChild } from '@angular/core';
import { Purchase } from 'src/app/Models/purchase/Purchase.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PurchaseService } from 'src/app/Services/purchase/purchase.service';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.css']
})
export class PurchaselistComponent implements OnInit {

  displayedColumns: string[] = ['Purchase ID', 'Purchase Date','Purchasers Email', 'Actions'];
  dataSource: MatTableDataSource<Purchase>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private purchaseService: PurchaseService
  ) { }

  ngOnInit(): void {
    this.getAllPurchase();
    this.purchaseService.refreshNeed.subscribe(() => {
      this.getAllPurchase();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPurchase(){
    this.purchaseService.getAllPurchase().subscribe(
      (data: Purchase[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deletePurchase(purid: number) {
    this.purchaseService.deletePurchase(purid).subscribe();
  }

  editPurchase(pur: Purchase) {
    this.purchaseService.currentPurchase = Object.assign({}, pur);
  }

}
