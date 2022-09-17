import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/Models/purchase/Purchase.model';
import { Product } from 'src/app/Models/product/Product.model';
import { PurchasedetailService } from 'src/app/Services/purchasedetail/purchasedetail.service';
import { Purchasedetail } from 'src/app/Models/purchasedetail/Purchasedetail.model';

@Component({
  selector: 'app-addpurchasedetail',
  templateUrl: './addpurchasedetail.component.html',
  styleUrls: ['./addpurchasedetail.component.css']
})
export class AddpurchasedetailComponent implements OnInit {

  allPurchase: Purchase[];
  allProduct: Product[];

  constructor(
    public purchasedetailService: PurchasedetailService
  ) { }

  ngOnInit(): void {
    this.getAllPurchase();
    this.getAllProduct();
  }

  getAllPurchase(){
    this.purchasedetailService.getAllPurchase().subscribe(
      (data: Purchase[]) => {
        this.allPurchase = data
      }
    );
  }
  getAllProduct(){
    this.purchasedetailService.getAllProduct().subscribe(
      (data: Product[]) => {
        this.allProduct = data
      }
    );
  }

  createOrUpdatePurchasedetail(currentPurchasedetail: Purchasedetail) {
    if ( currentPurchasedetail.purdetid != null ) {
      this.updatePurchasedetail(currentPurchasedetail);
    } 
    // else {
    //   this.createPurchasedetail(currentPurchasedetail);
    // }
  }

  createPurchasedetail(purdetail: Purchasedetail) {
    this.purchasedetailService.createPurchasedetail(purdetail).subscribe();
  }

  updatePurchasedetail(purdetail: Purchasedetail) {
    this.purchasedetailService.updatePurchasedetail(purdetail).subscribe();
  }

  clear() {
    this.purchasedetailService.currentPurchasedetail =new Purchasedetail(null, null, null, null, null, null);
  }

}
