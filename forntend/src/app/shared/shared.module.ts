import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatExpansionModule} from '@angular/material/expansion';
import { AddcategoryComponent } from './products/category/addcategory/addcategory.component';
import { CategorylistComponent } from './products/category/categorylist/categorylist.component';
import { AddproductComponent } from './products/product/addproduct/addproduct.component';
import { ProductlistComponent } from './products/product/productlist/productlist.component';
import { CategoryserviceService } from '../Services/categoryservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProductService } from '../Services/product/product.service';
import {MatSelectModule} from '@angular/material/select';
import { PurchaseService } from '../Services/purchase/purchase.service';
import { PurchasedetailService } from '../Services/purchasedetail/purchasedetail.service';
import { CentralstockService } from '../Services/centralstock/centralstock.service';
import { CreatepurchaseComponent } from './products/purchase/createpurchase/createpurchase.component';
import { PurchaselistComponent } from './products/purchase/purchaselist/purchaselist.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddpurchasedetailComponent } from './products/purchasedetails/addpurchasedetail/addpurchasedetail.component';
import { PurchasedetaillistComponent } from './products/purchasedetails/purchasedetaillist/purchasedetaillist.component';
import { CentralstocklistComponent } from './stock/centralstocklist/centralstocklist.component';
import { AddissueproductComponent } from './products/issueproduct/addissueproduct/addissueproduct.component';
import { IssueproductlistComponent } from './products/issueproduct/issueproductlist/issueproductlist.component';
import { AddbranchinfoComponent } from './branch/addbranchinfo/addbranchinfo.component';
import { BranchinfolistComponent } from './branch/branchinfolist/branchinfolist.component';
import { IssueproductService } from '../Services/issueproduct/issueproduct.service';
import { BranchinfoService } from '../Services/branchinfo/branchinfo.service';
import { IssueproductdetailService } from '../Services/issueproductdetail/issueproductdetail.service';
import { AddissueproductdetailComponent } from './products/issueproductdetail/addissueproductdetail/addissueproductdetail.component';
import { IssueproductdetaillistComponent } from './products/issueproductdetail/issueproductdetaillist/issueproductdetaillist.component';
import { PendingreceiveComponent } from './branchreceive/pendingreceive/pendingreceive.component';
import { ReceivedlistComponent } from './branchreceive/receivedlist/receivedlist.component';
import { BranchreceiveService } from '../Services/branchreceive/branchreceive.service';
import { ReceiveformComponent } from './branchreceive/receiveform/receiveform.component';
import { PendingproductsComponent } from './branchreceivedetail/pendingproducts/pendingproducts.component';
import { ReceivedetailformComponent } from './branchreceivedetail/receivedetailform/receivedetailform.component';
import { ReceivedetaillistComponent } from './branchreceivedetail/receivedetaillist/receivedetaillist.component';
import { ReceivedetailService } from '../Services/branchreceivedetail/receivedetail.service';
import { MheaderComponent } from './managercomponent/mheader/mheader.component';
import { MfooterComponent } from './managercomponent/mfooter/mfooter.component';
import { MsidebarComponent } from './managercomponent/msidebar/msidebar.component';
import { BranchstockService } from '../Services/branchstock/branchstock.service';
import { BranchstocklistComponent } from './stock/branchstocklist/branchstocklist.component';
import { AddstaffComponent } from './staffs/addstaff/addstaff.component';
import { StafflistComponent } from './staffs/stafflist/stafflist.component';
import { MatRadioModule } from '@angular/material/radio';
import { StaffdetailService } from '../Services/staffdetails/staffdetail.service';
import { AddsaleComponent } from './branchsale/addsale/addsale.component';
import { SalelistComponent } from './branchsale/salelist/salelist.component';
import { AddsaledetailComponent } from './branchsaledetail/addsaledetail/addsaledetail.component';
import { SaledetaillistComponent } from './branchsaledetail/saledetaillist/saledetaillist.component';
import { AddexpenseComponent } from './branchexpense/addexpense/addexpense.component';
import { ExpenselistComponent } from './branchexpense/expenselist/expenselist.component';
import { BranchsaleService } from '../Services/branchsale/branchsale.service';
import { BranchsaledetailService } from '../Services/branchsaledetail/branchsaledetail.service';
import { BstocklistComponent } from './branchsaledetail/bstocklist/bstocklist.component';
import { AllpurchaseComponent } from './purchasereport/allpurchase/allpurchase.component';
import { PurchasereportService } from '../Services/purchasereport/purchasereport.service';
import { BranchexpenseService } from '../Services/branchexpense/branchexpense.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DatepurchaseComponent } from './purchasereport/datepurchase/datepurchase.component';
import { AllsaleComponent } from './salereport/allsale/allsale.component';
import { DatesaleComponent } from './salereport/datesale/datesale.component';
import { SalecartComponent } from './branchsaledetail/salecart/salecart.component';
import { Cart } from '../Models/Salecart/salecart.model';
import { PurchasecartComponent } from './products/purchasedetails/purchasecart/purchasecart.component';
import { Purchasecart } from '../Models/purchasecart/purchasecart.model';
import { PurchaseproductlistComponent } from './products/purchasedetails/purchaseproductlist/purchaseproductlist.component';
import { PeridsaleComponent } from './salereport/peridsale/peridsale.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    AddcategoryComponent,
    CategorylistComponent,
    AddproductComponent,
    ProductlistComponent,
    CreatepurchaseComponent,
    PurchaselistComponent,
    AddpurchasedetailComponent,
    PurchasedetaillistComponent,
    CentralstocklistComponent,
    AddissueproductComponent,
    IssueproductlistComponent,
    AddbranchinfoComponent,
    BranchinfolistComponent,
    AddissueproductdetailComponent,
    IssueproductdetaillistComponent,
    PendingreceiveComponent,
    ReceivedlistComponent,
    ReceiveformComponent,
    PendingproductsComponent,
    ReceivedetailformComponent,
    ReceivedetaillistComponent,
    MheaderComponent,
    MfooterComponent,
    MsidebarComponent,
    BranchstocklistComponent,
    AddstaffComponent,
    StafflistComponent,
    AddsaleComponent,
    SalelistComponent,
    AddsaledetailComponent,
    SaledetaillistComponent,
    AddexpenseComponent,
    ExpenselistComponent,
    BstocklistComponent,
    AllpurchaseComponent,
    DatepurchaseComponent,
    AllsaleComponent,
    DatesaleComponent,
    SalecartComponent,
    PurchasecartComponent,
    PurchaseproductlistComponent,
    PeridsaleComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatRadioModule,
    PdfViewerModule
  ],
  providers: [
    CategoryserviceService,
    ProductService,
    PurchaseService,
    PurchasedetailService,
    CentralstockService,
    IssueproductService,
    BranchinfoService,
    IssueproductdetailService,
    BranchreceiveService,
    ReceivedetailService,
    BranchstockService,
    StaffdetailService,
    BranchsaleService,
    BranchsaledetailService,
    PurchasereportService,
    BranchexpenseService,
    Cart,
    Purchasecart
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    AddcategoryComponent,
    CategorylistComponent,
    AddproductComponent,
    ProductlistComponent,
    CreatepurchaseComponent,
    PurchaselistComponent,
    AddpurchasedetailComponent,
    PurchasedetaillistComponent,
    CentralstocklistComponent,
    AddissueproductComponent,
    IssueproductlistComponent,
    AddbranchinfoComponent,
    BranchinfolistComponent,
    AddissueproductdetailComponent,
    IssueproductdetaillistComponent,
    PendingreceiveComponent,
    ReceivedlistComponent,
    ReceiveformComponent,
    PendingproductsComponent,
    ReceivedetailformComponent,
    ReceivedetaillistComponent,
    MheaderComponent,
    MfooterComponent,
    MsidebarComponent,
    BranchstocklistComponent,
    AddstaffComponent,
    StafflistComponent,
    AddsaleComponent,
    SalelistComponent,
    AddsaledetailComponent,
    SaledetaillistComponent,
    AddexpenseComponent,
    ExpenselistComponent,
    BstocklistComponent,
    AllpurchaseComponent,
    DatepurchaseComponent,
    AllsaleComponent,
    DatesaleComponent,
    SalecartComponent,
    PurchasecartComponent,
    PurchaseproductlistComponent,
    PeridsaleComponent
  ]
})
export class SharedModule { }
