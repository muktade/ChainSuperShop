import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './AdminPanel/default/default.module';
import { FormsModule } from '@angular/forms';
import { ManagermoduleModule } from './AdminPanel/manager/managermodule/managermodule.module';
import { WebmoduleModule } from './Website/webmodule/webmodule.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    ManagermoduleModule,
    WebmoduleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
