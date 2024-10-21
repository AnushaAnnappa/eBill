// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Login } from './models/login.model';
import { Register } from './models/register.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  //private userName: string = '';

  constructor(private http: HttpClient) { }

  login(login:Login): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, login)
      .pipe(
        tap((response: any) => {
          // Assuming the API returns a user object with a name property
          //this.userName = response.user.name;
          // Store the token in localStorage
          localStorage.setItem('token', response.token);
        })
      );
  }

  register(register:Register): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/register`, register)
  }
  logout(): void {
    // Clear the stored token and user name
    localStorage.removeItem('token');
    //this.userName = '';
  }

  //getUserName(): string {
   // return this.userName;
  //}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}