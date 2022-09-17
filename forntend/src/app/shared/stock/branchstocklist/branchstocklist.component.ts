import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BranchstockService } from 'src/app/Services/branchstock/branchstock.service';

@Component({
  selector: 'app-branchstocklist',
  templateUrl: './branchstocklist.component.html',
  styleUrls: ['./branchstocklist.component.css']
})
export class BranchstocklistComponent implements OnInit {

  displayedColumns: string[] = ['BranchStock ID', 'Branch ID', 'Branch Location', 'Product Name','Category Name', 'Stock Quantity', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private branchstockService: BranchstockService
  ) { }

  ngOnInit(): void {
    this.getAllBranchstockDetails();
    this.branchstockService.refreshNeed.subscribe(() => {
      this.getAllBranchstockDetails();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllBranchstockDetails(){
    this.branchstockService.getAllBranchstockDetails().subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }
}
