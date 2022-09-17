import { Component, OnInit } from '@angular/core';
import { ReceivedetailService } from 'src/app/Services/branchreceivedetail/receivedetail.service';
import { Receiveproductdetail } from 'src/app/Models/branchreceivedetail/Receiveproductdetail.model';
import { Receivedproduct } from 'src/app/Models/branchreceiveproduct/Receivedproduct.model';
import { BranchreceiveService } from 'src/app/Services/branchreceive/branchreceive.service';
import { IssueproductdetailService } from 'src/app/Services/issueproductdetail/issueproductdetail.service';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';
import { Branchstock } from 'src/app/Models/branchstock/Branchstock.model';

@Component({
  selector: 'app-receivedetailform',
  templateUrl: './receivedetailform.component.html',
  styleUrls: ['./receivedetailform.component.css']
})
export class ReceivedetailformComponent implements OnInit {

  constructor(
    public receiveproductdetailService: ReceivedetailService,
    public receiveproductService: BranchreceiveService,
    public issuedetailService: IssueproductdetailService
  ) { }

  ngOnInit(): void {
  }

  createReceivedetailandupdateReceiveproduct(receiveproductdetail: Receiveproductdetail, receiveproduct: Receivedproduct, issudetail: Issueproductdetail) {
    
      this.createReceivedproductdetail(receiveproductdetail, issudetail, receiveproduct);
      this.updateReceiveproduct(receiveproduct);
      this.dynamicInsertUpdateBranchStock(issudetail, receiveproduct);
  }


  createReceivedproductdetail(receiveproductdetail: Receiveproductdetail, issuedetail: Issueproductdetail, receiveproduct: Receivedproduct) {
    receiveproductdetail.recdetid = receiveproductdetail.recdetid;
    receiveproductdetail.recid = receiveproduct.recid;
    receiveproductdetail.pid = issuedetail.pid;
    receiveproductdetail.recqty = issuedetail.issueqty;
    receiveproductdetail.spricerate = issuedetail.spricerate;

    this.receiveproductdetailService.createReceiveproductdetail(receiveproductdetail).subscribe();
  }

  updateReceivedproductdetail(receiveproductdetail: Receiveproductdetail, issuedetail: Issueproductdetail, receiveproduct: Receivedproduct) {
    receiveproductdetail.recid = receiveproduct.recid;
    receiveproductdetail.pid = issuedetail.pid;
    receiveproductdetail.recqty = issuedetail.issueqty;
    receiveproductdetail.spricerate = issuedetail.spricerate;
    this.receiveproductdetailService.updateReceiveproductdetail(receiveproductdetail).subscribe();
  }

  updateReceiveproduct(receiveproduct: Receivedproduct) {
    this.receiveproductService.currentReceivedproduct.status = 'Stocked';
    this.receiveproductService.updateReceivedproduct(receiveproduct).subscribe();
  }

  dynamicInsertUpdateBranchStock(issuedetail: Issueproductdetail, receiveproduct: Receivedproduct){
    
    this.receiveproductdetailService.currentBranchstock.branchid = receiveproduct.branchid;
    this.receiveproductdetailService.currentBranchstock.pid = issuedetail.pid;
    this.receiveproductdetailService.currentBranchstock.bstockqty = issuedetail.issueqty;

    this.receiveproductdetailService.dynamicInsertBranchstock(this.receiveproductdetailService.currentBranchstock).subscribe();
  }

  clear() {
    this.receiveproductdetailService.currentReceivedproductdetail = new Receiveproductdetail();
    this.receiveproductService.currentReceivedproduct = new Receivedproduct();
    this.issuedetailService.currentIssueproductdetail = new Issueproductdetail();
  }
}
