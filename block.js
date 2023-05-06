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

function drawBlock(object, playerBoard, assignCSS) {
  let oneBlock = document.createElement("div");
  oneBlock.setAttribute("class", `${assignCSS}`);
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
  drawBlock(block, displayBoardOne, "createdBlockOne");
}
function displayPlayerTwoBlock() {
  drawBlock(blockTwo, displayBoardTwo, "createdBlockTwo");
}

function blockSpeed(object) {
  let speed = Math.floor(Math.random() * 5 + 1) * 10;
  object.y_axis += speed;
  return object;
}

console.time("moveBlockBoardOne");

function moveBlockBoardOne() {
  let tempBlock = blockSpeed(block);
  console.log("🚀  file: block.js:60  moveBlock  tempBlock:", tempBlock);
  const movingBlock = document.querySelector(".createdBlockOne");
  movingBlock.style.top = `${tempBlock.y_axis}px`;
  displayBoardOne.append(movingBlock);
}

console.timeEnd("moveBlockBoardOne");

function moveBlockBoardTwo() {
  let tempBlock = blockSpeed(blockTwo);
  console.log("🚀 file: block.js:68 moveBlockBoardTwo tempBlock:", tempBlock);
  const movingBlock = document.querySelector(".createdBlockTwo");
  movingBlock.style.top = `${tempBlock.y_axis}px`;
  displayBoardTwo.append(movingBlock);
}

export {
  displayPlayerOneBlock,
  displayPlayerTwoBlock,
  moveBlockBoardOne,
  moveBlockBoardTwo,
};
