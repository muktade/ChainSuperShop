import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product/product.service';
import { Product } from 'src/app/Models/product/Product.model';
import { Category } from 'src/app/Models/category/Category.model';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  allCategory: Category[];

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllCategoryName();
  }


  getAllCategoryName(){
    this.productService.getAllCategoryName().subscribe(
      (data: Category[]) => {
        this.allCategory = data
      }
    );
  }

  createOrUpdateProduct() {
    console.log(this.productService.currentProduct);
    if ( this.productService.currentProduct.pid != null ) {
      this.updateProduct(this.productService.currentProduct);
    } else {
      this.createProduct(this.productService.currentProduct);
    }
  }

  createProduct(product: Product) {
    this.productService.createProduct(product).subscribe();
  }

  updateProduct(product: Product) {
    this.productService.updateProduct(product).subscribe();
  }

  clear() {
    this.productService.currentProduct =new Product();
  }
}
