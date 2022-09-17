import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/Modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/Modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { ProductComponent } from 'src/app/Modules/product/product.component';
import { PurchaseComponent } from 'src/app/Modules/purchase/purchase.component';
import { PurchasedetailComponent } from 'src/app/Modules/purchasedetail/purchasedetail.component';
import { CentralstockComponent } from 'src/app/Modules/centralstock/centralstock.component';
import { BranchstockComponent } from 'src/app/Modules/branchstock/branchstock.component';
import { IssueproductComponent } from 'src/app/Modules/issueproduct/issueproduct.component';
import { IssueproductdetailComponent } from 'src/app/Modules/issueproductdetail/issueproductdetail.component';
import { BranchinfoComponent } from 'src/app/Modules/branchinfo/branchinfo.component';
import { BranchreceivedproductComponent } from 'src/app/Modules/branchreceivedproduct/branchreceivedproduct.component';
import { BranchreceivedproductdetailComponent } from 'src/app/Modules/branchreceivedproductdetail/branchreceivedproductdetail.component';
import { BranchsaleComponent } from 'src/app/Modules/branchsale/branchsale.component';
import { BranchsaledetailComponent } from 'src/app/Modules/branchsaledetail/branchsaledetail.component';
import { BranchexpenseComponent } from 'src/app/Modules/branchexpense/branchexpense.component';
import { StaffdetailComponent } from 'src/app/Modules/staffdetail/staffdetail.component';
import { PurchasereportComponent } from 'src/app/Modules/purchasereport/purchasereport.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ProductComponent,
    PurchaseComponent,
    PurchasedetailComponent,
    CentralstockComponent,
    IssueproductComponent,
    IssueproductdetailComponent,
    BranchinfoComponent,
    BranchreceivedproductComponent,
    BranchreceivedproductdetailComponent,
    BranchsaleComponent,
    BranchsaledetailComponent,
    BranchexpenseComponent,
    BranchstockComponent,
    StaffdetailComponent,
    PurchasereportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
