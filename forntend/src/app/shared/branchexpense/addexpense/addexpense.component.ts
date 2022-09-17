import { Component, OnInit } from '@angular/core';
import { BranchexpenseService } from 'src/app/Services/branchexpense/branchexpense.service';
import { Branchexpense } from 'src/app/Models/branchexpense/Branchexpense.model';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  allbranch: Branchinfo[];

  constructor(
    public branchexpservice: BranchexpenseService,
    private branchinfoService: BranchinfoService
  ) { }

  ngOnInit(): void {
    this.getAllBranchinfo();
  }

  getAllBranchinfo(){
    this.branchinfoService.getAllBranchinfo().subscribe(
      (data: Branchinfo[]) => {
        this.allbranch = data;
      }
    );
  }

  createOrUpdateBranchexpense(currentBexpense: Branchexpense) {

    this.branchexpservice.currentBexpense.status = "not accounted";

    if (currentBexpense.bexpid != null) {
      this.updateBranchexpense(currentBexpense);
    } else {
      this.createBranchexpense(currentBexpense);
    }
  } 

  createBranchexpense(cat: Branchexpense) {
    this.branchexpservice.createBranchexpense(cat).subscribe();
  }

  updateBranchexpense(cat: Branchexpense) {
    this.branchexpservice.updateBranchexpense(cat).subscribe();
  }

  clear() {
    this.branchexpservice.currentBexpense = new Branchexpense();
  }

}
