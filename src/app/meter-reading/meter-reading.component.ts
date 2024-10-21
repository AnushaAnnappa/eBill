import { Component, OnInit } from '@angular/core';
import { MeterService } from '../meter.service';
import { Reading } from '../models/reading.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.css']
})
export class MeterReadingComponent implements OnInit {
  year: number = new Date().getFullYear();
  month: number = new Date().getMonth() + 1;
  openingReading: number | null = null;
  closingReading: number = 0;
  isFirstReading: boolean = true;
  reading:Reading=new Reading();
  showSuccessModal:boolean=false;
  constructor(
    private meterService: MeterService,
  private router:Router) 
    { }

  ngOnInit() {
    //this.fetchReadings();
  }

  fetchReadings() {
    this.meterService.getMeterReadings().subscribe(
      (readings: Reading[]) => {
        if (readings && readings.length > 0) {
         
          readings.sort((a: Reading, b: Reading) => 
            new Date(b.readingDate).getTime() - new Date(a.readingDate).getTime()
          );
          const latestReading = readings[0];
          
          this.openingReading = latestReading.ClosingReading;
          this.isFirstReading = false;

          const latestDate = new Date(latestReading.readingDate);
          latestDate.setMonth(latestDate.getMonth() + 1);
          this.year = latestDate.getFullYear();
          this.month = latestDate.getMonth() + 1;
        } else {
          this.isFirstReading = true;
        }
      },
      error => {
        console.error('Failed to fetch readings', error);
        this.isFirstReading = true;
      }
    );
  }

  onSubmit() {
    let struserId=localStorage.getItem("userId");
    let userId=(struserId!=null)?parseInt(struserId):0;
    console.log("user id : ",userId);
    this.reading.UserId=userId;
    this.meterService.submitMeterReading(this.reading).subscribe(
      (response: Reading) => {
        console.log('Meter reading submitted successfully');
        
        //this.fetchReadings(); 
      },
      error => {
        console.error('Failed to submit meter reading', error);
       
      }
    );
    this.showSuccessModal=true;
  }
  closeSuccessModal() {
    this.showSuccessModal = false;
  }
    goBack(){
      this.router.navigate(['/dashboard']);
    }
  }
