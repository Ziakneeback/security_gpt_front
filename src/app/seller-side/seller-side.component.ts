import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-side',
  templateUrl: './seller-side.component.html',
  styleUrls: ['./seller-side.component.css']
})
export class SellerSideComponent {
  hover = false;

  onLogin() {
    
   // this.router.navigate(['/login']);
    console.log('Нажата кнопка Авторизоваться');
  }
}
