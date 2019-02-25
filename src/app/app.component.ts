import { Component, OnInit } from "@angular/core";
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "game-of-life";

  columns: number = 10;
  rows: number = 10;
  resolution: number = 10;

  ngOnInit() {
    const columns = this.columns;
    const rows = this.rows;
    const criticalStrike = Math.random();
    const criticalSave = Math.random();
  const grid =  this.createTwoDimensionalArray();

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = this.generateRandomInteger(2);
      }
    }

    console.table(grid);

  }

  generateRandomInteger(limit) {
    const maximumInteger = Math.floor(Math.random() * Math.floor(limit));;
      return maximumInteger;
    }

  createTwoDimensionalArray() {
    let arr = new Array(10);
    for (let i = 0; i < arr.length; i++) {
      // a.push(i); [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
     arr[i] = new Array(10);
    }
return arr;
      }


  draw() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (canvas.getContext) {
      const context = canvas.getContext("2d");

      context.fillRect(25, 25, 100, 100);
      context.clearRect(45, 45, 60, 60);
      context.strokeRect(50, 50, 50, 50);
    }
  }
}
