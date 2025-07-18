// src/app/footer/footer.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // добавляем поле для состояния hover
  hover = false;

  constructor(private router: Router) {}

  // метод для обработки клика по кнопке «Авторизоваться»
  onLogin() {
    this.router.navigate(['/login']);
  }
}
