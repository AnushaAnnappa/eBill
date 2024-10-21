import { Component } from '@angular/core';
import { BillService } from '../bill.service';
import { Router } from '@angular/router';
import { MissingReading, MonthlyReport, TotalCollection } from '../models/report.model';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  monthlyBillMonth: number = new Date().getMonth() + 1;
  monthlyBillYear: number = new Date().getFullYear();
  missingReadingMonth: number = new Date().getMonth() + 1;
  missingReadingYear: number = new Date().getFullYear();
  collectionYear: number = new Date().getFullYear();
  showSuccessPrompt: boolean = false;
  monthlyReports:MonthlyReport[]=new Array<MonthlyReport>();
  usersWithoutClosingMeter: MissingReading[] = new Array<MissingReading>;
  totalCollections: TotalCollection[] = new Array<TotalCollection>;

  constructor(
    private billService: BillService,
    private router: Router
  ) { }

  generateMonthlyBillReport() {
    let struserId=localStorage.getItem("userId");
    let userId=(struserId!=null)?parseInt(struserId):0;
    console.log("user id : ",userId);
    //this.monthlyReports.userId=userId;
    this.billService.getAllUserChargesForMonth( this.monthlyBillYear, this.monthlyBillMonth).subscribe(
      charges => this.monthlyReports = charges
    );
    this.showSuccessPrompt = true;
  setTimeout(() => {
    this.showSuccessPrompt = false;
  }, 3000);
  }

  generateMissingReadingReport() {
    let struserId=localStorage.getItem("userId");
    let userId=(struserId!=null)?parseInt(struserId):0;
    console.log("user id : ",userId);
    this.billService.getUsersWithoutClosingMeter(this.missingReadingYear, this.missingReadingMonth).subscribe(
      users => this.usersWithoutClosingMeter = users
    );
    this.showSuccessPrompt = true;
  setTimeout(() => {
    this.showSuccessPrompt = false;
  }, 3000);
  }

  generateTotalCollectionsReport() {
    let struserId=localStorage.getItem("userId");
    let userId=(struserId!=null)?parseInt(struserId):0;
    console.log("user id : ",userId);
    this.billService.getTotalCollections(this.collectionYear).subscribe(
      collections => this.totalCollections = collections
    );
    this.showSuccessPrompt = true;
  setTimeout(() => {
    this.showSuccessPrompt = false;
  }, 3000);
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
