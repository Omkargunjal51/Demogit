import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GuarddemoService } from '../service/guarddemo.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private login:GuarddemoService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    // Implement your logic here
    const isAuthenticated = this.login.isLogin; // Example condition
    if (isAuthenticated) {
      // this.router.navigate(['/user']);
      alert("false")
      return false;
    }
    alert("True")

    return true;
  }
}
