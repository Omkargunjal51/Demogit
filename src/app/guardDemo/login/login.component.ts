import { Component,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  constructor(private router:Router){};

  Login(username:any,password:any)
  {
    if(username===password)
    {
      console.log("Login Successful");
      this.router.navigate(['/user']);    }
  }

  ngOnDestroy(): void {
    console.log("Ondestroy of login")
  }

  lightstar=false;
  star()
  {
    this.lightstar=!this.lightstar;
  }
}
