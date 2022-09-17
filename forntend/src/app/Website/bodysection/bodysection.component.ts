import { Component, OnInit } from '@angular/core';
import { BranchinfoService } from 'src/app/Services/branchinfo/branchinfo.service';
import { Branchinfo } from 'src/app/Models/branchinfo/Branchinfo.model';
import { Category } from 'src/app/Models/category/Category.model';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';

@Component({
  selector: 'app-bodysection',
  templateUrl: './bodysection.component.html',
  styleUrls: ['./bodysection.component.css']
})
export class BodysectionComponent implements OnInit {

  allbranch: Branchinfo[];

  allprocat: Category[];

  constructor(
    private branchinfoService: BranchinfoService,
    private categoryservice: CategoryserviceService
  ) { }

  ngOnInit(): void {
    this.getAllBranchinfo();
    this.getAllCategories();
  }

  getAllBranchinfo(){
    this.branchinfoService.getAllBranchinfo().subscribe(
      (data: Branchinfo[]) => {
        this.allbranch = data;
      }
    );
  }

  getAllCategories(){
    this.categoryservice.getAllCategory().subscribe(
      (data: Category[]) => {
        this.allprocat = data;
      }
    );
  }

}
