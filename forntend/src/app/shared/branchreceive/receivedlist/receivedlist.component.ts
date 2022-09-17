import { Component, OnInit, ViewChild } from '@angular/core';
import { Receivedproduct } from 'src/app/Models/branchreceiveproduct/Receivedproduct.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BranchreceiveService } from 'src/app/Services/branchreceive/branchreceive.service';
import { IssueproductService } from 'src/app/Services/issueproduct/issueproduct.service';
import { Subscription } from 'rxjs';
import { IssueproductdetailService } from 'src/app/Services/issueproductdetail/issueproductdetail.service';

@Component({
  selector: 'app-receivedlist',
  templateUrl: './receivedlist.component.html',
  styleUrls: ['./receivedlist.component.css']
})
export class ReceivedlistComponent implements OnInit {

  displayedColumns: string[] = ['Received ID', 'Branch ID','Branch Location','Issue ID','Issue Detail ID', 'Issue Date', 'Received Date','Status', 'Actions'];
  dataSource: MatTableDataSource<Object>;
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public branchreceiveService : BranchreceiveService,
    private issueproductService : IssueproductService,
    private issueproductdetailService : IssueproductdetailService
  ) { }

  ngOnInit(): void {
    this.getAllReceivedproductwithissuedetail();
    this.branchreceiveService.refreshNeed.subscribe(() => {
      this.getAllReceivedproductwithissuedetail();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllReceivedproductwithissuedetail(){
    this.branchreceiveService.getAllReceivedproductwithissuedetail(this.branchreceiveService.branchid).subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  editReceiveproduct(info: Object) {
    this.branchreceiveService.currentReceivedproduct = Object.assign({}, info[0]);
    this.issueproductService.currentIssueproduct = Object.assign({}, info[1]);
    this.issueproductdetailService.currentIssueproductdetail = Object.assign({}, info[2]);
    this.togglePanel();
  }

  togglePanel() {
    this.branchreceiveService.panelOpenState = !this.branchreceiveService.panelOpenState
  }
}
