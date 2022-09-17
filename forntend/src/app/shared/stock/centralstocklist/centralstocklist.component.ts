import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Centralstock } from 'src/app/Models/centralstock/Centralstock.model';
import { CentralstockService } from 'src/app/Services/centralstock/centralstock.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-centralstocklist',
  templateUrl: './centralstocklist.component.html',
  styleUrls: ['./centralstocklist.component.css']
})
export class CentralstocklistComponent implements OnInit {

  displayedColumns: string[] = ['Stock ID', 'Product Name','Category Name', 'Stock Quantity', 'Actions'];
  dataSource: MatTableDataSource<Object>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private centralstockService: CentralstockService
  ) { }

  ngOnInit(): void {
    this.getAllCentralstockDetails();
    this.centralstockService.refreshNeed.subscribe(() => {
      this.getAllCentralstockDetails();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // getAllCentralstock(){
  //   this.centralstockService.getAllCentralstock().subscribe(
  //     (data: Centralstock[]) => {
  //       this.dataSource= new MatTableDataSource (data);
  //       this.dataSource.paginator = this.paginator;
  //     }
  //   );
  //  }

  getAllCentralstockDetails(){
    this.centralstockService.getAllCentralstockDetails().subscribe(
      (data: Object[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.filterPredicate = (data, filter) => JSON.stringify(data).includes(filter);
      }
    );
  }
}
