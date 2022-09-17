import { Component, OnInit } from '@angular/core';
import { BranchreceiveService } from 'src/app/Services/branchreceive/branchreceive.service';
import { IssueproductService } from 'src/app/Services/issueproduct/issueproduct.service';
import { Issueproduct } from 'src/app/Models/issueproduct/Issueproduct.model';
import { Receivedproduct } from 'src/app/Models/branchreceiveproduct/Receivedproduct.model';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';
import { IssueproductdetailService } from 'src/app/Services/issueproductdetail/issueproductdetail.service';

@Component({
  selector: 'app-receiveform',
  templateUrl: './receiveform.component.html',
  styleUrls: ['./receiveform.component.css']
})
export class ReceiveformComponent implements OnInit {

  constructor(
    public receiveproductService: BranchreceiveService,
    public issueproductdetailService: IssueproductdetailService
  ) { }

  ngOnInit(): void {
  }

  createReceivedproductandupdateIssueproduct(receiveproduct: Receivedproduct, issueproductdetail: Issueproductdetail) {
    if (receiveproduct.recid != null) {
      this.updateReceivedproduct(receiveproduct);
    }
    else {
      this.createReceivedproduct(receiveproduct);
      this.updateIssueproductdetail(issueproductdetail);
    }
  }


  createReceivedproduct(receiveproduct: Receivedproduct) {
    this.changeBranchid();
    this.changeIssueid();
    this.receiveproductService.currentReceivedproduct.issuedetid = this.issueproductdetailService.currentIssueproductdetail.issuedetid;
    this.receiveproductService.currentReceivedproduct.status = 'not stocked';
    this.receiveproductService.createReceivedproduct(receiveproduct).subscribe();
  }

  updateReceivedproduct(receiveproduct: Receivedproduct) {
    this.changeBranchid();
    this.changeIssueid();
    this.receiveproductService.currentReceivedproduct.issuedetid = this.issueproductdetailService.currentIssueproductdetail.issuedetid;
    this.receiveproductService.updateReceivedproduct(receiveproduct).subscribe();
  }

  updateIssueproductdetail(issueproductdetail: Issueproductdetail) {
    this.issueproductdetailService.currentIssueproductdetail.status = 'received';
    this.issueproductdetailService.updateIssueproductdetail(issueproductdetail).subscribe();
  }

  clear() {
    this.issueproductdetailService.currentIssueproductdetail = new Issueproductdetail();
    this.receiveproductService.currentReceivedproduct = new Receivedproduct();
  }

  changeBranchid() {
    this.receiveproductService.currentReceivedproduct.branchid = this.issueproductdetailService.currentIssueproductdetail.branchid;
  }

  changeIssueid() {
    this.receiveproductService.currentReceivedproduct.issueid = this.issueproductdetailService.currentIssueproductdetail.issueid;
  }
}
