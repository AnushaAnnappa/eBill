import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //userName: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
   // this.userName = this.authService.getUserName();
  }

  navigateToMeterReading() {
    this.router.navigate(['/meter-reading']);
  }

  navigateToReports() {
    this.router.navigate(['/reports']);
  }

  navigateToBillView() {
    this.router.navigate(['/bill-view']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
