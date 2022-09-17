import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { DefaultModule } from '../../default/default.module';
import { ManagerComponent } from '../manager.component';



@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    DefaultModule
  ]
})
export class ManagermoduleModule { }
