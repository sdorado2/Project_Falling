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
console.log(block);
let blockTwo = createPlayerBlock(playerTwoBlock());

/* const playerOne = {
  assignCSS: ".createdBlockOne",
  createBlock: playerOneBlock(),
  display: displayPlayerOneBlock(),
  player: block,
  playerBoard: displayBoardOne,
};

const playerTwo = {
  assignCSS: ".createdBlockTwo",
  createBlock: playerTwoBlock(),
  display: displayPlayerTwoBlock(),
  player: blockTwo,
  playerBoard: displayBoardTwo,
};
 */
function createPlayerBlock(player) {
  let newBlock;
  while (newBlock === null || newBlock === undefined) {
    newBlock = player;
  }
  return newBlock;
}

function checkPlayer(object) {
  return object === block ? playerOne : playerTwo;
}

function playerOneBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 3) * 100 + 50);
}

function playerTwoBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 6) * 100 + 1050);
}

function displayPlayerOneBlock() {
  drawBlock(block, displayBoardOne, "createdBlockOne");
}
function displayPlayerTwoBlock() {
  drawBlock(blockTwo, displayBoardTwo, "createdBlockTwo");
}

function drawBlock(object, board, assignCSS) {
  const startBlock = document.createElement("div");
  startBlock.setAttribute("class", `${assignCSS}`);
  let styleBlock = `
        left : ${object.x_axis}px;
        top : ${object.y_axis}px;
        width : ${object.width}px;
        height : ${object.height}px;
        position : absolute;
    `;
  startBlock.style.cssText = styleBlock;
  board.appendChild(startBlock);
}

function blockSpeed(object) {
  let speed = Math.floor(Math.random() * 5 + 1) * 10;
  object.y_axis += speed;
  console.log(`🚀  file: block.js:74  object:`, object);
  return object;
}

function moveBlock() {
  // console.log(`🚀  file: block.js:78  object:`, object);
  /* 
  tempPlayer = checkPlayer(object);
  tempPlayer.player = blockSpeed(tempPlayer.player); */

  let testBlock = blockSpeed(block);
  console.log(`🚀  file: block.js:85  testBlock:`, testBlock);

  const oneBlock = document.querySelector(".createdBlockOne");
  oneBlock.style.top = `${testBlock.y_axis}px`;
  displayBoardOne.appendChild(oneBlock); //? Why is it creating a dup
}

let tempPlayer;
function reDrawBlock(object = block) {
  console.log(`🚀  file: block.js:66  block:`, block);
  console.log(`🚀  file: block.js:66  block:`, typeof block);

  if (object === null || object === undefined || object === {}) {
    tempPlayer = checkPlayer(object);
    tempPlayer.player = createPlayerBlock(tempPlayer.createBlock);
    tempPlayer.display;
  }
}

function deletedDisplayBlock(assignCSS = ".createdBlockOne") {
  let blockDisplay = Array.from(document.querySelector(assignCSS));
  blockDisplay[0].style.backgroundColor = "green";
  blockDisplay[0].classList.remove("createdBlockOne");
  blockDisplay[0].remove();
}

function deleteObjectBlock(object) {
  delete object.x_axis;
  delete object.y_axis;
  delete object.height;
  delete object.width;
  delete object.makeBlock;

  object = undefined;
  console.log(`🚀  file: block.js:112  object:`, object);
}

export {
  block,
  blockTwo,
  displayPlayerOneBlock,
  displayPlayerTwoBlock,
  moveBlock,
  reDrawBlock,
  deletedDisplayBlock,
  deleteObjectBlock,
};
