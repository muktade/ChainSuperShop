import { Component, OnInit } from '@angular/core';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';

@Component({
  selector: 'app-addbranchinfo',
  templateUrl: './addbranchinfo.component.html',
  styleUrls: ['./addbranchinfo.component.css']
})
export class AddbranchinfoComponent implements OnInit {

  constructor(
    public branchinfoService: BranchinfoService
  ) { } 

  ngOnInit(): void {
  }

  createOrUpdateBranchinfo(currentBranchinfo: Branchinfo) {

    if (currentBranchinfo.branchid != null) {
      this.updateBranchinfo(currentBranchinfo);
    } else {
      this.createBranchinfo(currentBranchinfo);
    }
  }

  createBranchinfo(branch: Branchinfo) {
    this.branchinfoService.createBranchinfo(branch).subscribe();
  }

  updateBranchinfo(branch: Branchinfo) {
    this.branchinfoService.updateBranchinfo(branch).subscribe();
  }

  clear() {
    this.branchinfoService.currentBranchinfo = new Branchinfo()

}

}
