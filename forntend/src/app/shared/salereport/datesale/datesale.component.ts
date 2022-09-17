import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datesale',
  templateUrl: './datesale.component.html',
  styleUrls: ['./datesale.component.css']
})
export class DatesaleComponent implements OnInit {

  fromdate: string;
  todate: string;
  
  src="";

  constructor() { }

  ngOnInit(): void {
  }

  generateAllpurchaseReport(){
    
      
    this.src = "http://localhost:8081/ChainSuperShopManagement/reportView4/"+this.fromdate+"/"+this.todate;
    console.log(this.src);

}

clear(){
  this.todate ="";
  this.fromdate="";
}

}
