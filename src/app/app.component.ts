import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-of-life';


  createTwoDimensionalArray(columns, rows) {
    let arr = new Array(columns);
    for (let i = 0; i <arr.length; i++) {
      arr[i] = new Array(rows);
    }
  }
}
