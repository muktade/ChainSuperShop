import { Component, OnInit } from '@angular/core';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model';
import { BranchsaleService } from 'src/app/Services/branchsale/branchsale.service';
import { BranchsaledetailService } from 'src/app/Services/branchsaledetail/branchsaledetail.service';
import { Branchsaledetail } from 'src/app/Models/branchsaleDetail/Branchsaledetail.model';

@Component({
  selector: 'app-addsaledetail',
  templateUrl: './addsaledetail.component.html',
  styleUrls: ['./addsaledetail.component.css']
})
export class AddsaledetailComponent implements OnInit {

  allbranchsale: Branchsale[];

  constructor(
    public branchsaleservice: BranchsaleService,
    public branchsaledetailservice: BranchsaledetailService
  ) { }

  ngOnInit(): void {
    this.getAllBranchsale();
    this.branchsaleservice.refreshNeed.subscribe(() => {
      this.getAllBranchsale();
    });
  }

  getAllBranchsale(){
    this.branchsaleservice.getAllBranchsale().subscribe(
      (data: Branchsale[]) => {
        this.allbranchsale = data;
      }
    );
  }

  createOrUpdateBranchsaledetail(currentBranchsaledetail: Branchsaledetail) {

    if (currentBranchsaledetail.bsaledetid != null) {
      this.updateBranchsaledetail(currentBranchsaledetail);
      //this.upbstockforupdate(currentBranchsaledetail);
    } 
    // else {
    //   this.createBranchsaledetail(currentBranchsaledetail);
    //   this.upbstockforinsert(currentBranchsaledetail);
    // }
  }

  createBranchsaledetail(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.createBranchsaledetail(branchsale).subscribe();
  }

  updateBranchsaledetail(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.updateBranchsaledetail(branchsale).subscribe();
  }

  clear() {
    this.branchsaledetailservice.currentBranchsaledetail = new Branchsaledetail(null, null, null, null, null)

  }

  upbstockforinsert(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.upbstockforinsert(branchsale).subscribe();
  }
  upbstockforupdate(branchsale: Branchsaledetail) {
    this.branchsaledetailservice.upbstockforupdate(branchsale).subscribe();
  }

}
