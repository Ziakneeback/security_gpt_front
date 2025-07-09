import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-side',
  templateUrl: './seller-side.component.html',
  styleUrls: ['./seller-side.component.css']
})
export class SellerSideComponent {
  hover = false;

  constructor(private router: Router) {}

  onLogin(): void {
    this.router.navigate(['/login']);
  }
}
