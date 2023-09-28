import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: number = 0;

  incrementCounter() {
    if (this.counter >= 0) {
       return this.counter++;
    }
  }

  decrementCounter() {
    if (this.counter > 0) {
      return this.counter--;
   }
  }
}
