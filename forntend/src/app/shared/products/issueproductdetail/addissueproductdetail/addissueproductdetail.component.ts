import { Component, OnInit } from '@angular/core';
import { Issueproduct } from 'src/app/Models/issueproduct/Issueproduct.model';
import { IssueproductService } from 'src/app/Services/issueproduct/issueproduct.service';
import { IssueproductdetailService } from 'src/app/Services/issueproductdetail/issueproductdetail.service';
import { CentralstockService } from 'src/app/Services/centralstock/centralstock.service';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';

@Component({
  selector: 'app-addissueproductdetail',
  templateUrl: './addissueproductdetail.component.html',
  styleUrls: ['./addissueproductdetail.component.css']
})
export class AddissueproductdetailComponent implements OnInit {

  allIssueproduct: Issueproduct[];
  allCentralstock: Object[];
  allBranch: Branchinfo[];

  constructor(
    public issueproductService: IssueproductService,
    public issueproductdetailService: IssueproductdetailService,
    public centralstockService: CentralstockService,
    public branchinfoService: BranchinfoService
  ) { }

  ngOnInit(): void {
    this.getAllIssueProduct();
    this.getAllCentralstock();
    this.getAllBranchinfo();
  }

  getAllIssueProduct(){
    this.issueproductService.getAllIssueproduct().subscribe(
      (data: Issueproduct[]) => {
        this.allIssueproduct = data
      }
    );
  }
  getAllCentralstock(){
    this.centralstockService.getAllCentralstockDetails().subscribe(
      (data: Object[]) => {
        this.allCentralstock = data
      }
    );
  }

  createOrUpdateIssueproductdetail(currentIssueproductdetail: Issueproductdetail) {

    this.issueproductdetailService.currentIssueproductdetail.status = 'pending';

    if ( currentIssueproductdetail.issuedetid != null ) {
      this.updateIssueproductdetail(currentIssueproductdetail);
    } else {
      this.createIssueproductdetail(currentIssueproductdetail);
    }
  }

  createIssueproductdetail(issuedet: Issueproductdetail) {
    this.issueproductdetailService.createIssueproductdetail(issuedet).subscribe();
  }

  updateIssueproductdetail(issuedet: Issueproductdetail) {
    this.issueproductdetailService.updateIssueproductdetail(issuedet).subscribe();
  }

  getAllBranchinfo(){
    this.branchinfoService.getAllBranchinfo().subscribe(
      (data: Branchinfo[])=>{
        this.allBranch = data;
      }
    );
  }

  clear() {
    this.issueproductdetailService.currentIssueproductdetail =new Issueproductdetail();
  }

}
