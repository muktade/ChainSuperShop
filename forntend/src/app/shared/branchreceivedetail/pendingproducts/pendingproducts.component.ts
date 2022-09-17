import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ReceivedetailService } from 'src/app/Services/branchreceivedetail/receivedetail.service';
import { Receivedproduct } from 'src/app/Models/branchreceiveproduct/Receivedproduct.model';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';
import { BranchreceiveService } from 'src/app/Services/branchreceive/branchreceive.service';
import { IssueproductdetailService } from 'src/app/Services/issueproductdetail/issueproductdetail.service';

@Component({
  selector: 'app-pendingproducts',
  templateUrl: './pendingproducts.component.html',
  styleUrls: ['./pendingproducts.component.css']
})
export class PendingproductsComponent implements OnInit {

  displayedColumns: string[] = ['Receive ID', 'Branch ID', 'Receive Date','Issue ID','Product ID','Product Quantity', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public receiveproductdetailService: ReceivedetailService,
    public receiveproductService: BranchreceiveService,
    public issuedetailService: IssueproductdetailService
  ) { }

  ngOnInit(): void {
    this.getAllPendingReceivedproductdetail();
    this.receiveproductdetailService.refreshNeed.subscribe(() => {
      this.getAllPendingReceivedproductdetail();
    });
  }

  getAllPendingReceivedproductdetail(){
    this.receiveproductdetailService.getAllPendingReceivedproductwithdetail(this.receiveproductdetailService.branchid).subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  editPendingReceived(receiveproduct: Receivedproduct, issuedetail: Issueproductdetail) {
    this.receiveproductService.currentReceivedproduct = Object.assign({}, receiveproduct);
    this.issuedetailService.currentIssueproductdetail = Object.assign({}, issuedetail);
    this.togglePanel();
  }

  togglePanel() {
    this.receiveproductdetailService.panelOpenState = !this.receiveproductdetailService.panelOpenState
  }

}
