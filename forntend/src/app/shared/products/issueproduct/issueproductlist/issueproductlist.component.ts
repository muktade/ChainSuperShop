import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Issueproduct } from 'src/app/Models/issueproduct/Issueproduct.model';
import { IssueproductService } from 'src/app/Services/issueproduct/issueproduct.service';

@Component({
  selector: 'app-issueproductlist',
  templateUrl: './issueproductlist.component.html',
  styleUrls: ['./issueproductlist.component.css']
})
export class IssueproductlistComponent implements OnInit {

  displayedColumns: string[] = ['Issue ID', 'Issue Date', 'Issuer Email', 'Actions'];
  dataSource: MatTableDataSource<Issueproduct>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private issueproductService: IssueproductService
  ) { }

  ngOnInit(): void {
    this.getAllIssueproduct();
    this.issueproductService.refreshNeed.subscribe(() => {
      this.getAllIssueproduct();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllIssueproduct(){
    this.issueproductService.getAllIssueproduct().subscribe(
      (data: Issueproduct[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteIssueproduct(issueid: number) {
    this.issueproductService.deleteIssueproduct(issueid).subscribe();
  }

  editIssueproduct(issueproduct: Issueproduct) {
    this.issueproductService.currentIssueproduct = Object.assign({}, issueproduct);
  }

}
