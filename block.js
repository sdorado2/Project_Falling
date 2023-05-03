import { displayBoardOne, displayBoardTwo } from "/board.js";
class makeBlock {
  constructor(x_axis) {
    this.x_axis = x_axis;
    this.y_axis = 300;
    this.width = 180;
    this.height = 80;
  }
}

let block = createPlayerBlock(playerOneBlock());
let blockTwo = createPlayerBlock(playerTwoBlock());
console.log("🚀 ~ file: block.js:12 ~ block:", block);

function playerOneBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 3) * 100 + 50);
}

function playerTwoBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 6) * 100 + 1050);
}

function createPlayerBlock(player) {
  let newBlock;
  while (newBlock === null || newBlock === undefined) {
    newBlock = player;
  }
  return newBlock;
}

function drawBlock(object, playerBoard) {
  let oneBlock = document.createElement("div");
  oneBlock.setAttribute("class", "createdBlock");
  let styleBlock = `
        left : ${object.x_axis}px;
        top : ${object.y_axis}px;
        width : ${object.width}px;
        height : ${object.height}px;
        position : absolute;
    `;
  oneBlock.style.cssText = styleBlock;
  playerBoard.appendChild(oneBlock);
}

function displayPlayerOneBlock() {
  drawBlock(block, displayBoardOne);
}
function displayPlayerTwoBlock() {
  drawBlock(blockTwo, displayBoardTwo);
}

function blockSpeed(object) {
  let movingBlock = object;
  movingBlock.y_axis = Math.floor(Math.random() * 5 + 1) * 10;
  return (block = movingBlock);
}

function moveBlock() {
  let a = blockSpeed(block);
  const movingBlock = document.querySelector(".createdBlock");
  movingBlock.style.top = `${a}px`;
  displayBoardOne.append(movingBlock);
}

export { displayPlayerOneBlock, displayPlayerTwoBlock, moveBlock };
