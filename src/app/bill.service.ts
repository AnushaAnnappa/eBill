import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBill(userId: number, year: number, month: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Bill/calculate/${userId}/${month}/${year}`);
  }

  getAllUserChargesForMonth(year: number, month: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Bill/charges/${month}/${year}`);
  }

  getUsersWithoutClosingMeter(year: number, month: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Bill/missing-readings/${month}/${year}`);
  }

  getTotalCollections(year: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Bill/collections/${year}`);
  }
}