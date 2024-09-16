import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-nav',
  templateUrl: './responsive-nav.component.html',
  styleUrl: './responsive-nav.component.css'
})
export class ResponsiveNavComponent {
  isResponsive: boolean = false;

  toggleMenu1() {
    this.isResponsive = !this.isResponsive;
  }

  isMenuOpen: boolean = false;
  isMenuOpen1: boolean = false;


  toggleMenu() {
    this.isMenuOpen1 = !this.isMenuOpen1;
  }
}
