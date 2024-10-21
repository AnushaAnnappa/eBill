// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { ReportsComponent } from './reports/reports.component';
import { BillViewComponent } from './bill-view/bill-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from './auth.service';
import { MeterService } from './meter.service';
import { BillService } from './bill.service';
import { AuthInterceptors } from './auth.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MeterReadingComponent,
    ReportsComponent,
    BillViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    MeterService,
    BillService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }