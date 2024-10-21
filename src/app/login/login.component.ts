import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mobileNo: string = '';
  password: string = '';
  login:Login=new Login();
  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.login).subscribe(
      response => {
        
        localStorage.setItem("userId",response.userID);
        this.router.navigate(['/dashboard']);
      },
      error => {
     
        console.error('Login failed', error);
      }
    );
  }
}