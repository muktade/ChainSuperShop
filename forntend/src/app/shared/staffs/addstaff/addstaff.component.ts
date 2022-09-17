import { Component, OnInit } from '@angular/core';

interface Gender {
  value: string;
  viewValue: string;
}

import { StaffdetailService } from 'src/app/Services/staffdetails/staffdetail.service';
import { Staffdetail } from 'src/app/Models/staffdetail/Staffdetail.model';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {

  allBranch: Branchinfo[];

  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  constructor(
    public staffdetailservice: StaffdetailService,
    public branchinfoService: BranchinfoService
  ) { }

  ngOnInit(): void {
    this.getAllBranchinfo();
  }

  createOrUpdateStaffdetail(staff: Staffdetail) {

    if ( staff.staffid != null ) {
      this.updateStaffdetail(staff);
    } else {
      this.createStaffdetail(staff);
    }
  }

  createStaffdetail(staff: Staffdetail) {
    this.staffdetailservice.createStaffdetail(staff).subscribe();
  }

  updateStaffdetail(staff: Staffdetail) {
    this.staffdetailservice.updateStaffdetail(staff).subscribe();
  }

  getAllBranchinfo(){
    this.branchinfoService.getAllBranchinfo().subscribe(
      (data: Branchinfo[])=>{
        this.allBranch = data;
      }
    );
  }

  clear() {
    this.staffdetailservice.currentstaff =new Staffdetail();
  }

}
