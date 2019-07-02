import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gama-angular-exercicios';
  count: number = 0;
  numberRandom: number  = 0;

  addCount() {
    if (this.count !== 100) {
      this.count++;
    }
  }

  subCount() {
    if (this.count !== 0) {
      this.count--;
    }
  }

  randomNumber() {
    this.numberRandom = Math.floor(1 + Math.random()*(100 + 1 - 1))
  }



}
