import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Branchexpense } from 'src/app/Models/branchexpense/Branchexpense.model';
import { MatPaginator } from '@angular/material/paginator';
import { BranchexpenseService } from 'src/app/Services/branchexpense/branchexpense.service';

@Component({
  selector: 'app-expenselist',
  templateUrl: './expenselist.component.html',
  styleUrls: ['./expenselist.component.css']
})
export class ExpenselistComponent implements OnInit {

  displayedColumns: string[] = ['Branch Expense ID', 'Branch ID', 'Expense Description', 'Expense Amount', 'Expense Date', 'Status', 'Actions'];
  dataSource: MatTableDataSource<Branchexpense>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private branchexpservice: BranchexpenseService
  ) { }

  ngOnInit(): void {
    this.getAllBranchexpense();
    this.branchexpservice.refreshNeed.subscribe(() => {
      this.getAllBranchexpense();
    });
  }

  togglePanel() {
    this.branchexpservice.panelOpenState = !this.branchexpservice.panelOpenState
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

  getAllBranchexpense(){
    this.branchexpservice.getAllBranchexpense().subscribe(
      (data: Branchexpense[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteBranchinfo(branchexpid: number) {
    this.branchexpservice.deleteBranchexpense(branchexpid).subscribe();
  }

  editBranchinfo(branch: Branchexpense) {
    this.branchexpservice.currentBexpense = Object.assign({}, branch);
    this.togglePanel();
  }

 
}
