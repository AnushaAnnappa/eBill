import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Reading } from './models/reading.model';

@Injectable({
  providedIn: 'root'
})
export class MeterService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  submitMeterReading(reading:Reading): Observable<Reading> {
    //const payload = { userId, year, month, closingReading, openingReading };
    return this.http.post<Reading>(`${this.apiUrl}/Reading`, reading);
  }

  getMeterReadings(): Observable<Reading[]> {
    return this.http.get<Reading[]>(`${this.apiUrl}/Reading`);
  }
}