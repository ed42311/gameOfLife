export default class Life {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  initGrid(gridArr){
    this.gridArr = gridArr;
  }

  getGrid() {
    return this.gridArr;
  }

  newCellValue(x, y) {
    let n = this.countNeighbours(x, y);
    let c = this.gridArr[y][x];
    if (c == 1) {
      return (n < 2 || n > 3) ? 0 : 1;
    } else {
      return n == 3 ? 1 : 0;
    }
  }

  increment() {
    let newGrid = [];
    for (let y = 0; y < this.height; y++) {
      newGrid[y] = [];
      for (let x = 0; x < this.width; x++) {
        newGrid[y][x] = this.newCellValue(x, y);
      }
    }
    this.gridArr = newGrid;
  }

  get(x, y) {
    return this.gridArr[y][x];
  }

  countNeighbours(x, y) {
    let count = 0;
    for (let h = Math.max(0, y - 1); h <= Math.min(this.height - 1, y + 1); h++) {
      for (let w = Math.max(0, x - 1); w <= x + 1; w++) {
        if (h != y || w != x) {
          if (this.get(w, h) == 1) {
            count++;
          };
        }
      }
    }
    return count;
  }

  print() {
    for (let y = 0; y < this.height; y++) {
      console.log(this.gridArr[y]);
    }
    console.log("---");
  }
}
