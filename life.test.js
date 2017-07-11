import Life from './life';
import { expect } from 'chai';

describe('life', () => {
  var life;
  beforeEach(() => {
    life = new Life(3,3);
  });

  it("will create the grid with width and height", () => {
    expect(life).to.be.ok;
    expect(life.width).to.be.eql(3);
    expect(life.height).to.be.eql(3);
  });

  it("init with an x pattern", () => {
    const gridArr = [[1,0,1],[0,1,0],[1,0,1]];
    life.initGrid(gridArr);
    expect(life.getGrid()).to.be.eql(gridArr);
  });

  it("cell dies with zero nieghbours", () => {
    const gridArr = [[0,0,0],[0,1,0],[0,0,0]];
    life.initGrid(gridArr);
    life.increment();
    expect(life.getGrid()).to.be.eql([[0,0,0], [0,0,0], [0,0,0]])
  });

  it("cell lives with two nieghbours", () => {
    const gridArr = [[0,0,0],[1,1,1],[0,0,0]];
    life.initGrid(gridArr);
    life.increment();
    expect(life.get(1, 1)).to.be.eql(1);
  });

  it("can count neighbours of a cell", () => {
    const gridArr = [[0,0,0],[1,1,1],[0,0,0]];
    life.initGrid(gridArr);
    expect(life.countNeighbours(1, 1)).to.be.eql(2);
  })

  it("kills cell that is overpopulated", () => {
    const gridArr = [[0,1,1],[1,1,1],[0,0,0]];
    life.initGrid(gridArr);
    life.increment();
    expect(life.get(1, 1)).to.be.eql(0);
  });

  it("creates a live cell with exactly three neighbours", () => {
    const gridArr = [[0,0,1],[1,0,1],[0,0,0]];
    life.initGrid(gridArr);
    life.increment();
    expect(life.get(1, 1)).to.be.eql(1);
  });

  it("does not create a live cell with exactly two neighbours", () => {
    const gridArr = [[0,0,0],[1,0,1],[0,0,0]];
    life.initGrid(gridArr);
    life.increment();
    expect(life.get(1, 1)).to.be.eql(0);
  });

  it.only("does the whole grid", () => {
    const gridArr = [[1,0,1],[0,1,0],[1,0,1]];
    life.initGrid(gridArr);
    life.print();
    life.increment();
    expect(life.getGrid()).to.be.eql([[0,1,0],[1,0,1],[0,1,0]]);
    life.print();
    life.increment();
    life.print();
  })
  // the  rule of underpopulation
});
