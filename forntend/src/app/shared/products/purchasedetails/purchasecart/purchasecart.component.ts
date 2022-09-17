import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/Services/purchase/purchase.service';
import { Purchase } from 'src/app/Models/purchase/Purchase.model';
import { Purchasecart } from 'src/app/Models/purchasecart/purchasecart.model';
import { PurchasedetailService } from 'src/app/Services/purchasedetail/purchasedetail.service';
import { Purchasedetail } from 'src/app/Models/purchasedetail/Purchasedetail.model';

@Component({
  selector: 'app-purchasecart',
  templateUrl: './purchasecart.component.html',
  styleUrls: ['./purchasecart.component.css']
})
export class PurchasecartComponent implements OnInit {

  Allpurchaseid : Purchase[];

  constructor(
    public purchaseService: PurchaseService,
    public purchasedetailservice: PurchasedetailService,
    public purchasecart: Purchasecart
  ) { }

  ngOnInit(): void {
    this.getAllPurchase();
  }

  getAllPurchase(){
    this.purchaseService.getAllPurchase().subscribe(
      (data: Purchase[]) => {
        this.Allpurchaseid = data;
      }
    );
  }

  DynamicPurchase(pcart: Purchasecart) {

    for (let i = 0; i < pcart.lines.length; i++) {

      this.addnewPurchasedetail(
        this.purchaseService.currentPurchase.purid,
        this.purchaseService.currentPurchase.purdate,
        pcart.lines[i].product.pid,
        pcart.lines[i].quantity,
        pcart.lines[i].unitprice,
        pcart.lines[i].lineTotal
      );

      this.purchasedetailservice.newpurchasedetail[i].purid = this.purchaseService.currentPurchase.purid;
      this.purchasedetailservice.newpurchasedetail[i].purdate = this.purchaseService.currentPurchase.purdate;
      this.purchasedetailservice.newpurchasedetail[i].pid = pcart.lines[i].product.pid;
      this.purchasedetailservice.newpurchasedetail[i].purqty = pcart.lines[i].quantity;
      this.purchasedetailservice.newpurchasedetail[i].ppricepu = pcart.lines[i].unitprice;
      this.purchasedetailservice.newpurchasedetail[i].subtotal = pcart.lines[i].lineTotal;


      // this.createOrUpdateBranchsaledetail(this.branchsaledetailservice.newBranchsaleDetail[i]);
      //createOrUpdateBranchsaledetail(currentBranchsaledetail: Branchsaledetail) {

      if (this.purchasedetailservice.newpurchasedetail[i].purdetid == null) {
        this.createPurchasedetail(this.purchasedetailservice.newpurchasedetail[i]);
      }

    }
  }

  addnewPurchasedetail(spurid, spurdate, spid, spurqty, sppricepu, ssubtotal) {

    this.purchasedetailservice.newpurchasedetail.push(
      new Purchasedetail(spurid, spurdate, spid, spurqty, sppricepu, ssubtotal)
    );
  }
  createPurchasedetail(purdetail: Purchasedetail) {
    this.purchasedetailservice.createPurchasedetail(purdetail).subscribe();
  }

 
  clear(){
    this.purchaseService.currentPurchase.purid = null;
    this.purchaseService.currentPurchase.purdate = null;
    this.purchasecart.lines = [];
    this.purchasecart.cartPrice = 0;
  }
}
