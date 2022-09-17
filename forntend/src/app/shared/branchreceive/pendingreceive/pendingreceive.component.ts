import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BranchreceiveService } from 'src/app/Services/branchreceive/branchreceive.service';
import { Issueproduct } from 'src/app/Models/issueproduct/Issueproduct.model';
import { IssueproductService } from 'src/app/Services/issueproduct/issueproduct.service';
import { ReceivedlistComponent } from '../receivedlist/receivedlist.component';
import { IssueproductdetailService } from 'src/app/Services/issueproductdetail/issueproductdetail.service';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';

@Component({
  selector: 'app-pendingreceive',
  templateUrl: './pendingreceive.component.html',
  styleUrls: ['./pendingreceive.component.css']
})
export class PendingreceiveComponent implements OnInit {

  displayedColumns: string[] = ['Issue ID', 'Branch ID', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Issueproductdetail>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  issueproductdetailService: any;

  constructor(
    public receiveproductService: BranchreceiveService,
    public issueproductService: IssueproductService,
    public issueproductdetailService1: IssueproductdetailService
  ) { }

  ngOnInit(): void {
    this.getAllPendingReceivedproduct();
    this.receiveproductService.refreshNeed.subscribe(() => {
      this.getAllPendingReceivedproduct();
    });
  }

  getAllPendingReceivedproduct(){
    this.receiveproductService.getAllPendingReceivedproduct(this.receiveproductService.branchid).subscribe(
      (data: Issueproductdetail[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  editPendingReceived(issuedetail: Issueproductdetail) {
    this.issueproductdetailService1.currentIssueproductdetail = Object.assign({}, issuedetail);
    this.togglePanel();
  }

  togglePanel() {
    this.receiveproductService.panelOpenState = !this.receiveproductService.panelOpenState
  }
}
