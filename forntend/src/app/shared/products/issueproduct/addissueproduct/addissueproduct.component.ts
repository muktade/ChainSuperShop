import { Component, OnInit } from '@angular/core';
import { IssueproductService } from 'src/app/Services/issueproduct/issueproduct.service';
import { Issueproduct } from 'src/app/Models/issueproduct/Issueproduct.model';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';

@Component({
  selector: 'app-addissueproduct',
  templateUrl: './addissueproduct.component.html',
  styleUrls: ['./addissueproduct.component.css']
})
export class AddissueproductComponent implements OnInit {

  

  constructor(
    public issueproductService: IssueproductService,
    
  ) { }

  ngOnInit(): void {
    
  }

  createOrUpdateIssueproduct(currentIssueproduct: Issueproduct) {

    if ( currentIssueproduct.issueid != null ) {
      this.updateIssueproduct(currentIssueproduct);
    } else {
      this.createIssueproduct(currentIssueproduct);
    }
  }

  createIssueproduct(issueproduct: Issueproduct) {
    this.issueproductService.createIssueproduct(issueproduct).subscribe();
  }

  updateIssueproduct(issueproduct: Issueproduct) {
    this.issueproductService.updateIssueproduct(issueproduct).subscribe();
  }

  clear() {
    this.issueproductService.currentIssueproduct = new Issueproduct();
  }

}
