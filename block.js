import { boardOne, boardTwo } from "./board";

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

function drawPlayerOneBlock(block) {
  const playerOneBlock = document.createElement("div");
  playerOneBlock.setAttribute("class", "createdBlock");
  const styleBlock = `
        left : ${block.x_axis} px;
        top : ${block.y_axis} px;
        width : ${block.width} px;
        height : ${block.height} px;
        position : absolute;
    `;
  playerOneBlock.style.cssText = styleBlock;
  boardOne.appendChild(playerOneBlock);
}

function drawPlayerTwoBlock(block) {
  const playerTwoBlock = document.createElement("div");
  playerTwoBlock.setAttribute("class", "createBlockTwo");
  const styleBlock = `
        left : ${block.x_axis} px;
        top : ${block.y_axis} px;
        width : ${block.width} px;
        height : ${block.height} px;
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

function blockSpeed(block) {
  let movingBlock = block;
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
