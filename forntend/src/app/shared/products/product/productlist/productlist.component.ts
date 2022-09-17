import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/Models/product/Product.model';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  displayedColumns: string[] = ['Product ID', 'Category Name', 'Product Name', 'Product Description', 'Product ImageName', 'Manufacturer Name', 'Supplier Name', 'Reorder Quantity', 'Supply Quantity', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private productService: ProductService
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

  togglePanel() {
    this.productService.panelOpenState = !this.productService.panelOpenState
  }

  // getAllProduct(){
  //   this.productService.getAllProduct().subscribe(
  //     (data: Product[]) => {
  //       this.dataSource= new MatTableDataSource (data);
  //       this.dataSource.paginator = this.paginator;
  //     }
  //   );
  // }

  getAllProducAndCategory(){
    this.productService.getAllProductAndCategory().subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product[0].pid).subscribe();
  }

  editProduct(product: Product) {
    this.productService.currentProduct = Object.assign({}, product);
    this.togglePanel();
  }

}
