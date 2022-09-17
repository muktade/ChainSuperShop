import { Component, OnInit } from '@angular/core';
import { PurchasereportService } from 'src/app/Services/purchasereport/purchasereport.service';
import { Allpurchase } from 'src/app/Models/purchasereport/Allpurchase.model';

@Component({
  selector: 'app-allpurchase',
  templateUrl: './allpurchase.component.html',
  styleUrls: ['./allpurchase.component.css']
})
export class AllpurchaseComponent implements OnInit {

  Rep_Title: string;
  src = ""; 
 
  constructor(
    public purchasereportservice: PurchasereportService
  ) { }

  ngOnInit(): void {
  }

  // generateAllpurchaseReport(){
  //   console.log(this.Rep_Title);
  //   this.purchasereportservice.createAllPurchaseReport(this.Rep_Title).subscribe((response) => {
  //     //let file = new Blob([response], { type: 'application/pdf' });            
  //     console.log("start");
  //     var fileURL = URL.createObjectURL(response);
  //     console.log(fileURL);

  //     console.log("end");
      
  //     //window.open(fileURL);
  //     //this.src = fileURL;
  // });
  // }

  generateAllpurchaseReport(){
    
      
      this.src = "http://localhost:8081/ChainSuperShopManagement/reportView1/AllPurchase";
      console.log(this.src);

  }

  clear(){
    this.Rep_Title = "";
  }
 
}
