import { boardOne, boardTwo } from "/board.js";
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
console.log(block.x_axis);

function playerOneBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 3) * 100 + 50);
}

function playerTwoBlock() {
  return { x_axis: Math.floor(Math.random() * 4 + 6) * 100 + 1050 };
}

function createPlayerBlock(player) {
  let newBlock;
  while (newBlock === null || newBlock === undefined) {
    newBlock = player;
  }
  return newBlock;
}
// ? redundant function
// function createPlayerTwoBlock() {
//   let newBlock;
//   while (newBlock === null || newBlock === undefined) {
//     newBlock = playerTwoBlock;
//   }
//   return newBlock;
// }

function drawPlayerOneBlock(object) {
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
  console.log("🚀  file: block.js:53  drawPlayerOneBlock  boardOne:", boardOne);
  // boardOne.appendChild(oneBlock);

  //⛔ error message typeError : boardOne.appendChild is not a function
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
  // boardTwo.appendChild(playerTwoBlock);
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
  createPlayerBlock,
  drawPlayerOneBlock,
  drawPlayerTwoBlock,
  displayPlayerOneBlock,
  displayPlayerTwoBlock,
};
