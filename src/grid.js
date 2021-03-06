

    function createTwoDimensionalArray(columns, rows) {
      let arr = new Array(columns);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
      }
      return arr;
    }

    let grid;
    let columns = 10;
    let rows = 10;
    let resolution = 10;

    function setup() {
      createCanvas(600, 400);
      columns = width / resolution;
      rows = height / resolution;

      // calculate by the resolution of page

      grid = createTwoDimensionalArray(columns, rows);

      for (let i = 0; i < columns; i++) {
        for (let i = 0; i < columns; i++) {
          for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
          }
        }
      }
    }



    function draw() {
      background(0);

      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * resolution;
          let y = j * resolution;
          // when the grid position is equal to 1...
          if (grid[i][j] == 1) {
            fill(255);
            stroke(0);
            rect(x, y, resolution - 1, resolution - 1);
          }



        }
      }

      let next = createTwoDimensionalArray(columns, rows);
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          let state = grid[i][j]
          // Handle Edges
          if (i == 0 || i == columns - 1 || j == 0 || j == 0 || j == rows - 1) {
            next[i][j] = state;

          } else {


            // Count live neighbors
            let sum = 0;
            let neighbors = countNeighbors(grid, i, j)


            if (state == 0 && neighbors == 3) {
              next[i][j] = 1;
            } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
              next[i][j] = 0;
            } else {
              next[i][j] = state;
            }

          }


        }

      }
      grid = next;
      noLoop();
    }

    function countNeighbors(grid, x, y) {

      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {


          // wrap edges
          let column = (x + i + columns) % columns;
          let row = (y + j+ rows) % rows;
          sum += grid[column][row];
        }
      }
      sum -= grid[x][y];
      return sum;

    }
