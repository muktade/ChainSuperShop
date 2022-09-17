import { Component, OnInit } from '@angular/core';
import { Cart, CartLine } from 'src/app/Models/Salecart/salecart.model';
import { BranchsaleService } from 'src/app/Services/branchsale/branchsale.service';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model';
import { BranchstockService } from 'src/app/Services/branchstock/branchstock.service';
import { BranchsaledetailService } from 'src/app/Services/branchsaledetail/branchsaledetail.service';
import { Branchsaledetail } from 'src/app/Models/branchsaleDetail/Branchsaledetail.model';

@Component({
  selector: 'app-salecart',
  templateUrl: './salecart.component.html',
  styleUrls: ['./salecart.component.css']
})
export class SalecartComponent implements OnInit {

  allbranchsale: Branchsale[]; 

  constructor(
    public cart: Cart,
    public branchsaleservice: BranchsaleService,
    public branchstockService: BranchstockService,
    public branchsaledetailservice: BranchsaledetailService
  ) { }

  ngOnInit(): void {
    // this.getAllBranchsale();
    this.getAllBranchstockDetails();
    this.branchstockService.refreshNeed.subscribe(() => {
      this.getAllBranchstockDetails();
    });
  }

  // getAllBranchsale(){
  //   this.branchsaleservice.getAllBranchsale().subscribe(
  //     (data: Branchsale[]) => {
  //       this.allbranchsale = data;
  //     }
  //   );
  // }
 
  getAllBranchstockDetails() {
    this.branchstockService.getAllBranchsaleIDsbyBid(this.branchstockService.branchid).subscribe(
      (data: Branchsale[]) => {
        this.allbranchsale = data;
      }
    );
  }

  DynamicBrachsaledetails(cart: Cart) {

    for (let i = 0; i < cart.lines.length; i++) {

      // this.addnewsaledetail(
      //   this.branchsaleservice.currentBranchsale.bsaleid,
      //   cart.lines[i].product.pid,
      //   cart.lines[i].quantity,
      //   cart.lines[i].unitprice,
      //   cart.lines[i].lineTotal
      // );

// let branchsaleDetailbd  =this.branchsaledetailservice.newBranchsaleDetail[i];
let branchsaleDetailbd : Branchsaledetail =new Branchsaledetail(this.branchsaleservice.currentBranchsale.bsaleid
  ,cart.lines[i].product.pid,
        cart.lines[i].quantity,
        cart.lines[i].unitprice,
        cart.lines[i].lineTotal
  );

branchsaleDetailbd.bsaleid = this.branchsaleservice.currentBranchsale.bsaleid;
branchsaleDetailbd.pid = cart.lines[i].product.pid;
branchsaleDetailbd.saleqty = cart.lines[i].quantity;
branchsaleDetailbd.salerate = cart.lines[i].unitprice;
branchsaleDetailbd.subtotal = cart.lines[i].lineTotal;


      // this.createOrUpdateBranchsaledetail(this.branchsaledetailservice.newBranchsaleDetail[i]);
      //createOrUpdateBranchsaledetail(currentBranchsaledetail: Branchsaledetail) {

      if (branchsaleDetailbd.bsaledetid == null) {
        this.createBranchsaledetail(branchsaleDetailbd);
        this.upbstockforinsert(branchsaleDetailbd);
      }

    }
  }

  addnewsaledetail(bsaleid, pid, saleqty, salerate, subtotal) {

    this.branchsaledetailservice.newBranchsaleDetail.push(
      new Branchsaledetail(bsaleid, pid, saleqty, salerate, subtotal)
    );
  }


  checkvalues(cart: Cart, bsale: Branchsale) {
    console.log(cart.lines[0].product.pname, cart.lines[0].quantity, cart.lines[0].lineTotal, cart.lines[0].unitprice, cart.cartPrice, bsale);
  }

  upbstockforinsert(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.upbstockforinsert(branchsale).subscribe();
  }
  upbstockforupdate(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.upbstockforupdate(branchsale).subscribe();
  }

  createBranchsaledetail(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.createBranchsaledetail(branchsale).subscribe();
  }

  updateBranchsaledetail(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.updateBranchsaledetail(branchsale).subscribe();
  }

  clear() {
    this.cart.lines = [];
    this.cart.cartPrice = 0;
    this.branchsaleservice.currentBranchsale.bsaleid = null;
  }

}
