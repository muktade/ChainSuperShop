import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product/Product.model';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  allproduct: Product[];

  constructor(
    private productservice: ProductService
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productservice.getAllProduct().subscribe(
      (data: Product[]) => {
        this.allproduct = data;
      }
    );
  }

}
