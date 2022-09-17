import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IssueproductdetailService } from 'src/app/Services/issueproductdetail/issueproductdetail.service';
import { Issueproductdetail } from 'src/app/Models/issueproductdetail/Issueproductdetail.model';

@Component({
  selector: 'app-issueproductdetaillist',
  templateUrl: './issueproductdetaillist.component.html',
  styleUrls: ['./issueproductdetaillist.component.css']
})
export class IssueproductdetaillistComponent implements OnInit {

  displayedColumns: string[] = ['Issue Detail ID', 'Issue ID', 'Branch ID', 'Branch Location', 'Product Name', 'Issue Quantity','Sale Rate', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private issueproductdetailService: IssueproductdetailService
  ) { }

  ngOnInit(): void {
    this.getAllIssueProductDetailswithProducts();
    this.issueproductdetailService.refreshNeed.subscribe(() => {
      this.getAllIssueProductDetailswithProducts();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllIssueProductDetailswithProducts(){
    this.issueproductdetailService.getAllIssueproductdetailwithproduct().subscribe(
      (data: Object[]) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }

  deleteIssueproductdetail(issuedetail: Issueproductdetail) {
    this.issueproductdetailService.deleteIssueproductdetail(issuedetail.issuedetid).subscribe();
  }

  editIssueproductdetail(issuedetail: Issueproductdetail) {
    this.issueproductdetailService.currentIssueproductdetail = Object.assign({}, issuedetail);
  }

}
