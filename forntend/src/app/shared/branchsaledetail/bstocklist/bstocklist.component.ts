import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BranchstockService } from 'src/app/Services/branchstock/branchstock.service';
import { BranchsaledetailService } from 'src/app/Services/branchsaledetail/branchsaledetail.service';
import { Branchstock } from 'src/app/Models/branchstock/Branchstock.model';
import { Cart } from 'src/app/Models/Salecart/salecart.model';
import { Product } from 'src/app/Models/product/Product.model';

@Component({
  selector: 'app-bstocklist',
  templateUrl: './bstocklist.component.html',
  styleUrls: ['./bstocklist.component.css']
})
export class BstocklistComponent implements OnInit {

  

  displayedColumns: string[] = ['BranchStock ID', 'Branch ID', 'Branch Location', 'Product Name','Category Name', 'Stock Quantity', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public branchstockService: BranchstockService,
    public branchsaledetailservice: BranchsaledetailService,
    public cartservice: Cart
  ) { }

  ngOnInit(): void {
    this.getAllBranchstockDetails();
    this.branchstockService.refreshNeed.subscribe(() => {
      this.getAllBranchstockDetails();
    });
    this.branchsaledetailservice.refreshNeed.subscribe(() => {
      this.getAllBranchstockDetails();
    });
    
  }

  addproductsalecart(product: Product){
    this.cartservice.addLine(product);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllBranchstockDetails(){
    this.branchstockService.getAllBranchstockDetailsbyBid(this.branchstockService.branchid).subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  forsale(bstock: Branchstock){
    this.branchsaledetailservice.currentBranchsaledetail.pid = bstock.pid;
    this.branchsaledetailservice.panelOpenState = !this.branchsaledetailservice.panelOpenState;
  }

}
