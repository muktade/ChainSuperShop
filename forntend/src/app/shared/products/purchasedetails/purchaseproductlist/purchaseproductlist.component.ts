import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from 'src/app/Services/product/product.service';
import { Purchasecart } from 'src/app/Models/purchasecart/purchasecart.model';
import { Product } from 'src/app/Models/product/Product.model';

@Component({
  selector: 'app-purchaseproductlist',
  templateUrl: './purchaseproductlist.component.html',
  styleUrls: ['./purchaseproductlist.component.css']
})
export class PurchaseproductlistComponent implements OnInit {

  displayedColumns: string[] = ['Product ID', 'Category Name', 'Product Name', 'Product Description', 'Manufacturer Name', 'Supplier Name', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private productService: ProductService,
    public purchasecartservice: Purchasecart
  ) { }

  ngOnInit(): void {
    this.getAllProducAndCategory();
    this.productService.refreshNeed.subscribe(() => {
      this.getAllProducAndCategory();
    });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllProducAndCategory(){
    this.productService.getAllProductAndCategory().subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  addproductpurchasecart(product: Product){
    this.purchasecartservice.addLine(product);
  }
}

