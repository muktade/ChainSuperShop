import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './AdminPanel/default/default.component';
import { DashboardComponent } from './Modules/dashboard/dashboard.component';
import { PostsComponent } from './Modules/posts/posts.component';
import { ProductComponent } from './Modules/product/product.component';
import { PurchaseComponent } from './Modules/purchase/purchase.component';
import { PurchasedetailComponent } from './Modules/purchasedetail/purchasedetail.component';
import { CentralstockComponent } from './Modules/centralstock/centralstock.component';
import { IssueproductComponent } from './Modules/issueproduct/issueproduct.component';
import { IssueproductdetailComponent } from './Modules/issueproductdetail/issueproductdetail.component';
import { BranchinfoComponent } from './Modules/branchinfo/branchinfo.component';
import { BranchreceivedproductComponent } from './Modules/branchreceivedproduct/branchreceivedproduct.component';
import { BranchreceivedproductdetailComponent } from './Modules/branchreceivedproductdetail/branchreceivedproductdetail.component';
import { BranchsaleComponent } from './Modules/branchsale/branchsale.component';
import { BranchsaledetailComponent } from './Modules/branchsaledetail/branchsaledetail.component';
import { BranchexpenseComponent } from './Modules/branchexpense/branchexpense.component';
import { BranchstockComponent } from './Modules/branchstock/branchstock.component';
import { ManagerComponent } from './AdminPanel/manager/manager.component';
import { StaffdetailComponent } from './Modules/staffdetail/staffdetail.component';
import { PurchasereportComponent } from './Modules/purchasereport/purchasereport.component';
import { FontpageComponent } from './Website/fontpage/fontpage.component';
import { PageheaderComponent } from './Website/pageheader/pageheader.component';
import { BodysectionComponent } from './Website/bodysection/bodysection.component';
import { LoginpageComponent } from './Website/loginpage/loginpage.component';
import { DatepurchaseComponent } from './shared/purchasereport/datepurchase/datepurchase.component';
import { AllsaleComponent } from './shared/salereport/allsale/allsale.component';
import { DatesaleComponent } from './shared/salereport/datesale/datesale.component';
import { AllproductComponent } from './Website/allproduct/allproduct.component';
import { PeridsaleComponent } from './shared/salereport/peridsale/peridsale.component';


const routes: Routes = [

  {
    path: '',
    component: FontpageComponent,
    children: [
      {
        path: '',
        component: BodysectionComponent
      },
      {
        path: 'login',
        component: LoginpageComponent
      },
      {
        path: 'allproduct',
        component: AllproductComponent
      }
    ]
  },

  {
    path: 'admin',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'category',
      component: PostsComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    {
      path: 'purchase',
      component: PurchaseComponent
    },
    {
      path: 'purchasedetail',
      component: PurchasedetailComponent
    },
    {
      path: 'centralstock',
      component: CentralstockComponent
    },
    {
      path: 'issueproduct',
      component: IssueproductComponent
    },
    {
      path: 'issueproductdetail',
      component: IssueproductdetailComponent
    },
    {
      path: 'branchinfo',
      component: BranchinfoComponent
    },
    {
      path: 'branchreceiveproduct',
      component: BranchreceivedproductComponent
    },
    {
      path: 'branchreceiveproductdetail',
      component: BranchreceivedproductdetailComponent
    },
    {
      path: 'branchsale',
      component: BranchsaleComponent
    },
    {
      path: 'branchsaledetail',
      component: BranchsaledetailComponent
    },
    {
      path: 'branchexpense',
      component: BranchexpenseComponent
    },
    {
      path: 'branchstock',
      component: BranchstockComponent
    },
    {
      path: 'staffdetail',
      component: StaffdetailComponent
    },
    {
      path: 'purchasereport',
      component: PurchasereportComponent
    },
    {
      path: 'datepursaereport',
      component: DatepurchaseComponent
    },
    {
      path: 'allsalereport',
      component: AllsaleComponent
    },
    {
      path: 'datesale',
      component: DatesaleComponent
    },
    {
      path: 'saleperid',
      component: PeridsaleComponent
    }

    ]
  },

  {
    path: 'manager',
    component: ManagerComponent,
    children: [
      {
        path: '',
        component: BranchinfoComponent
      },
      {
        path: 'mbranchinfo',
        component: BranchinfoComponent
      },
      {
        path: 'mbranchreceiveproduct',
        component: BranchreceivedproductComponent
      },
      {
        path: 'mbranchreceiveproductdetail',
        component: BranchreceivedproductdetailComponent
      },
      {
        path: 'mbranchsale',
        component: BranchsaleComponent
      },
      {
        path: 'mbranchsaledetail',
        component: BranchsaledetailComponent
      },
      {
        path: 'mbranchexpense',
        component: BranchexpenseComponent
      },
      {
        path: 'mbranchstock',
        component: BranchstockComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
