import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/Services/purchase/purchase.service';
import { Purchase } from 'src/app/Models/purchase/Purchase.model';

@Component({
  selector: 'app-createpurchase',
  templateUrl: './createpurchase.component.html',
  styleUrls: ['./createpurchase.component.css']
})
export class CreatepurchaseComponent implements OnInit {

  constructor(
    public purchaseService: PurchaseService
  ) { }

  ngOnInit(): void {
  }

  createOrUpdatePurchase(currentPurchase: Purchase) {

    if ( currentPurchase.purid != null ) {
      this.updatePurchase(currentPurchase);
    } else {
      this.createPurchase(currentPurchase);
    }
  }

  createPurchase(pur: Purchase) {
    this.purchaseService.createPurchase(pur).subscribe();
  }

  updatePurchase(pur: Purchase) {
    this.purchaseService.updatePurchase(pur).subscribe();
  }

  clear() {
    this.purchaseService.currentPurchase = new Purchase();
  }

}
