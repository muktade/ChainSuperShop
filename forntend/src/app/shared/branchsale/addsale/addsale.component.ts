import { Component, OnInit } from '@angular/core';
import { BranchsaleService } from 'src/app/Services/branchsale/branchsale.service';
import { StaffdetailService } from 'src/app/Services/staffdetails/staffdetail.service';
import { Staffdetail } from 'src/app/Models/staffdetail/Staffdetail.model';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';

@Component({
  selector: 'app-addsale',
  templateUrl: './addsale.component.html',
  styleUrls: ['./addsale.component.css']
})
export class AddsaleComponent implements OnInit {

  allstaff: Staffdetail[];
  allbranch: Branchinfo[];

  constructor(
    public branchsaleservice: BranchsaleService,
    public staffservice: StaffdetailService,
    public branchinfoservice: BranchinfoService
  ) { }

  ngOnInit(): void {
    this.getAllStaffDetail();
    this.getAllBranchinfo();
  }

  getAllStaffDetail(){
    this.staffservice.getAllStaffdetail().subscribe(
      (data: Staffdetail[]) => {
        this.allstaff = data;
      }
    );
  }

  getAllBranchinfo(){
    this.branchinfoservice.getAllBranchinfo().subscribe(
      (data: Branchinfo[]) => {
        this.allbranch = data;
      }
    );
  }

  createOrUpdateBranchsale(currentBranchsale: Branchsale) {

    this.branchsaleservice.currentBranchsale.status = 'not accounted'; 

    if (currentBranchsale.bsaleid != null) {
      this.updateBranchsale(currentBranchsale);
    } else {
      this.createBranchsale(currentBranchsale);
    }
  }

  createBranchsale(branchsale: Branchsale) {
    this.branchsaleservice.createBranchsale(branchsale).subscribe();
  }

  updateBranchsale(branchsale: Branchsale) {
    this.branchsaleservice.updateBranchsale(branchsale).subscribe();
  }

  clear() {
    this.branchsaleservice.currentBranchsale = new Branchsale()

}

}
