class makeBlock {
  constructor(x_axis) {
    this.x_axis = x_axis;
    this.y_axis = 300;
    this.width = 180;
    this.height = 80;
  }
}

function playerOneBlock() {
  return { x_axis: Math.floor(Math.random() * 4 + 3) * 100 + 50 };
}

function playerTwoBlock() {
  return { x_axis: Math.floor(Math.random() * 4 + 6) * 100 + 1050 };
}

function createBlock() {
  let newBlock;
  while (newBlock === null) {
    newBlock = playerOneBlock;
  }
  return newBlock;
}
