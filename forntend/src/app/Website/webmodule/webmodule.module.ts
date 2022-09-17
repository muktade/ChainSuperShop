import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontpageComponent } from '../fontpage/fontpage.component';
import { PageheaderComponent } from '../pageheader/pageheader.component';
import { PagefooterComponent } from '../pagefooter/pagefooter.component';
import { RouterModule } from '@angular/router';
import { BodysectionComponent } from '../bodysection/bodysection.component';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { AllproductComponent } from '../allproduct/allproduct.component';


@NgModule({
  declarations: [
    FontpageComponent,
    PageheaderComponent,
    PagefooterComponent,
    BodysectionComponent,
    LoginpageComponent,
    AllproductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FlexLayoutModule, 
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule
  ]
})
export class WebmoduleModule { }
