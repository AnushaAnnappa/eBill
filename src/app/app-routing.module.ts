import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { ReportsComponent } from './reports/reports.component';
import { BillViewComponent } from './bill-view/bill-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'meter-reading', component: MeterReadingComponent },
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'reports', component: ReportsComponent },
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  { path: 'bill-view', component: BillViewComponent },
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }