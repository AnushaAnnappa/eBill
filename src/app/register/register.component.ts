import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Register } from '../models/register.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  mobileNo: string = '';
  email: string = '';
  password: string = '';
  connectionType:string='';
  register:Register=new Register();

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.register(this.register).subscribe(
      response => {
  
        this.router.navigate(['/login']);
      },
      error => {
    
        console.error('Registration failed', error);
      }
    );
  }
}