import { Component } from '@angular/core';
import { BillService } from '../bill.service';
import { Bill, BillDetails } from '../models/bill.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent {
  // userId: number = 0; 
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;

  bill:Bill=new Bill();
  billDetails:BillDetails=new BillDetails();
  constructor(
    private billService: BillService,
   private router:Router) { }

  viewBill() {
    let struserId=localStorage.getItem("userId");
    let userId=(struserId!=null)?parseInt(struserId):0;
    console.log("user id : ",userId);
    this.bill.UserId=userId;
    this.billService.getBill(userId, this.year, this.month).subscribe(
      billData => {
      console.log("Data Recieved",billData),
      this.billDetails = billData},
      error => console.error('Failed to fetch bill', error)
    );
  }
  goBack(){
    this.router.navigate(['/dashboard']);
  }
}
