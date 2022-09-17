import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepurchase',
  templateUrl: './datepurchase.component.html',
  styleUrls: ['./datepurchase.component.css']
})
export class DatepurchaseComponent implements OnInit {

  fromdate: string;
  todate: string;
  src="";

  constructor() { }

  ngOnInit(): void {
  }

  generateAllpurchaseReport(){
    
      
    this.src = "http://localhost:8081/ChainSuperShopManagement/reportView2/"+this.fromdate+"/"+this.todate;
    console.log(this.src);

}

clear(){
  this.todate ="";
  this.fromdate="";
}

}
