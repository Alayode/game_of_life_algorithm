import { Component, OnInit } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';


/**
 *
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 *
 *
 *
 * This Component generates the given number of columns and rows and
 * then next   draws the squares to the screen to create a grid
 * which then fills the color to red.
 *
 * Next step is to add another color based on the value stored in its positiion.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = `The Game Of Life`;

  columns = 10;
  rows = 10;
  resolution = 10;



  ngOnInit() {
    const columns = this.columns;
    const rows = this.rows;
    const criticalStrike = Math.random();
    const criticalSave = Math.random();

    const grid = this.createTwoDimensionalArray();
    this.generateGrid(grid, columns, rows);
    // console.table(grid);
    this.drawGridToCanvas(grid);
  }

  generateRandomInteger(limit) {
    const maximumInteger = Math.floor(Math.random() * Math.floor(limit));
    return maximumInteger;
  }

  generateGrid(myGrid, columns, rows) {

    const grid = myGrid;
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = this.generateRandomInteger(2);
      }
    }
  }

  createTwoDimensionalArray() {
    const myTwoDimensionalArray = new Array(10);
    for (let i = 0; i < myTwoDimensionalArray.length; i++) {
      // a.push(i); [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      myTwoDimensionalArray[i] = new Array(10);
    }
    return myTwoDimensionalArray;
  }

  drawGridToCanvas(gridRef) {
    const grid = gridRef;

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (canvas.getContext) {
      const context = canvas.getContext('2d');
      const resolution = 10;

      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

          const pointX = i * resolution;
          const pointY = j * resolution;
          const topRight = pointX * resolution;
          const topLeft = pointY * resolution;
          const resolutionHeight = resolution - 1;
          const resolutionWidth = resolution - 1;
          if (grid[i][j] === 1) {
            context.fillStyle = 'red';
            context.fillRect(
                              pointX,
                              pointY,
                              resolutionWidth,
                              resolutionHeight
                            );
          } else if (grid[i][j] === 0) {
            context.fillStyle = 'blue';
            context.fillRect(
                              pointX,
                              pointY,
                              resolutionWidth,
                              resolutionHeight
                            );
          }

        }
      }
    }
  }
}

