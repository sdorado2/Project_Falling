import { boardOne, boardTwo } from "/board.js";
class makeBlock {
  constructor(x_axis) {
    this.x_axis = x_axis;
    this.y_axis = 300;
    this.width = 180;
    this.height = 80;
  }
}

let block = createPlayerOneBlock();

function playerOneBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 3) * 100 + 50);
}

function playerTwoBlock() {
  return { x_axis: Math.floor(Math.random() * 4 + 6) * 100 + 1050 };
}

function createPlayerOneBlock() {
  let newBlock;
  while (newBlock === null) {
    newBlock = playerOneBlock;
  }
  return newBlock;
}

function createPlayerTwoBlock() {
  let newBlock;
  while (newBlock === null) {
    newBlock = playerTwoBlock;
  }
  return newBlock;
}

function drawPlayerOneBlock(object) {
  const playerOneBlock = document.createElement("div");
  playerOneBlock.setAttribute("class", "createdBlock");
  const styleBlock = `
        left : ${object.x_axis}px;
        top : ${object.y_axis}px;
        width : ${object.width}px;
        height : ${object.height}px;
        position : absolute;
    `;
  playerOneBlock.style.cssText = styleBlock;
  boardOne.appendChild(playerOneBlock);
}

function drawPlayerTwoBlock(object) {
  const playerTwoBlock = document.createElement("div");
  playerTwoBlock.setAttribute("class", "createBlockTwo");
  const styleBlock = `
        left : ${object.x_axis}px;
        top : ${object.y_axis}px;
        width : ${object.width}px;
        height : ${object.height}px;
        position : absolute;
    `;
  playerTwoBlock.style.cssText = styleBlock;
  boardTwo.appendChild(playerTwoBlock);
}

function displayPlayerOneBlock() {
  drawPlayerOneBlock(block);
}
function displayPlayerTwoBlock() {
  drawPlayerTwoBlock(block);
}

function blockSpeed(object) {
  let movingBlock = object;
  movingBlock.y_axis = Math.floor(Math.random() * 5 + 1) * 10;
  return (block = movingBlock);
}

export {
  playerOneBlock,
  playerTwoBlock,
  createPlayerOneBlock,
  createPlayerTwoBlock,
  drawPlayerOneBlock,
  drawPlayerTwoBlock,
  displayPlayerOneBlock,
  displayPlayerTwoBlock,
};
