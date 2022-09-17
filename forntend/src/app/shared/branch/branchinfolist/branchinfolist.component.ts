import { Component, OnInit, ViewChild } from '@angular/core';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';

@Component({
  selector: 'app-branchinfolist',
  templateUrl: './branchinfolist.component.html',
  styleUrls: ['./branchinfolist.component.css']
})
export class BranchinfolistComponent implements OnInit {

  displayedColumns: string[] = ['Branch ID', 'Branch Location', 'Branch Contact', 'Branch Email', 'Branch Description', 'Actions'];
  dataSource: MatTableDataSource<Branchinfo>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private branchinfoService: BranchinfoService
    ) { }

  ngOnInit(): void {
    this.getAllBranchinfo();
    this.branchinfoService.refreshNeed.subscribe(() => {
      this.getAllBranchinfo();
    });
  }

  togglePanel() {
    this.branchinfoService.panelOpenState = !this.branchinfoService.panelOpenState
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 

  getAllBranchinfo(){
    this.branchinfoService.getAllBranchinfo().subscribe(
      (data: Branchinfo[]) => {
        this.dataSource= new MatTableDataSource (data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  deleteBranchinfo(branchid: number) {
    this.branchinfoService.deleteBranchinfo(branchid).subscribe();
  }

  editBranchinfo(branch: Branchinfo) {
    this.branchinfoService.currentBranchinfo = Object.assign({}, branch);
    this.togglePanel();
  }


}
