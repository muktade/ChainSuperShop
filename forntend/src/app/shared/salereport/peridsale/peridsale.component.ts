import { Component, OnInit } from '@angular/core';
import { Branchsale } from 'src/app/Models/branchsale/Branchsale.model';
import { BranchsaleService } from 'src/app/Services/branchsale/branchsale.service';

@Component({
  selector: 'app-peridsale',
  templateUrl: './peridsale.component.html',
  styleUrls: ['./peridsale.component.css']
})
export class PeridsaleComponent implements OnInit {

  allbranchsale: Branchsale[];

  saleid: string;
  
  src="";

  constructor(
    public branchsaleservice: BranchsaleService
  ) { }

  ngOnInit(): void {
    this.getAllBranchsale();
  }

  getAllBranchsale(){
    this.branchsaleservice.getAllBranchsale().subscribe(
      (data: Branchsale[]) => {
        this.allbranchsale = data;
      }
    );
  }

  generateAllpurchaseReport(){
    
      
    this.src = "http://localhost:8081/ChainSuperShopManagement/reportView5/"+this.saleid;
    console.log(this.src);

}

clear(){
  this.saleid ="";
}

}
