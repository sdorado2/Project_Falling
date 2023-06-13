import { displayBoardOne, displayBoardTwo } from "/board.js";
class makeBlock {
  constructor(x_axis) {
    this.x_axis = x_axis;
    this.y_axis = 300;
    this.width = 180;
    this.height = 80;
  }
}

let userOne = {};
// 🧪 Testing variable; creating a empty array, and then creating a key with assign value of createPlayer Block
userOne.block = createPlayerBlock(playerOneBlock());
console.log(userOne.block);
let blockTwo = createPlayerBlock(playerTwoBlock());

const playerOne = {
  assignCSS: ".createdBlockOne",
  player: userOne.block,
  playerBoard: displayBoardOne,
};

const playerTwo = {
  assignCSS: ".createdBlockTwo",
  player: blockTwo,
  playerBoard: displayBoardTwo,
};

function createPlayerBlock(player) {
  let newBlock;
  while (newBlock === null || newBlock === undefined) {
    newBlock = player;
  }
  return newBlock;
}

function checkPlayer(object) {
  return object === userOne.block ? playerOne : playerTwo;
}

function playerOneBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 3) * 100 + 50);
}

function playerTwoBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 6) * 100 + 1050);
}

function displayPlayerOneBlock() {
  drawBlock(userOne.block, displayBoardOne, "createdBlockOne");
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
  let testBlock = blockSpeed(userOne.block);

  const oneBlock = document.querySelector(".createdBlockOne");
  oneBlock.style.top = `${testBlock.y_axis}px`;
  displayBoardOne.appendChild(oneBlock);
}

let tempPlayer;
function reDrawBlock(object = userOne.block) {
  console.log(`🚀  file: block.js:66  block:`, userOne.block);
  console.log(`🚀  file: block.js:66  block:`, typeof userOne.block);

  if (object === undefined || object === null) {
    tempPlayer = checkPlayer(object);
    tempPlayer.player = createPlayerBlock(tempPlayer.createBlock);
    tempPlayer.display;
  }
}

function deletedDisplayBlock(assignCSS = ".createdBlockOne") {
  let blockDisplay = Array.from(document.querySelectorAll(assignCSS));
  blockDisplay[0].style.backgroundColor = "green";
  blockDisplay[0].classList.remove("createdBlockOne");
  blockDisplay[0].remove();
}

function deleteObjectBlock(object) {
  delete object.block.x_axis;
  delete object.block.y_axis;
  delete object.block.width;
  delete object.block.height;
  delete object.block;
}

export {
  userOne,
  blockTwo,
  displayPlayerOneBlock,
  displayPlayerTwoBlock,
  moveBlock,
  reDrawBlock,
  deletedDisplayBlock,
  deleteObjectBlock,
};
