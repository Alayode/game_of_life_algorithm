import { Component, OnInit   } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'game-of-life';




ngOnInit() {
 const grid =  this.createTwoDimensionalArray(10, 10);
 console.log(grid);

}

  createTwoDimensionalArray(columns, rows) {
    const arr = new Array(columns);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
  }



}
