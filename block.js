import { displayBoardOne, displayBoardTwo } from "/board.js";
class makeBlock {
  constructor(x_axis) {
    this.x_axis = x_axis;
    this.y_axis = 300;
    this.width = 180;
    this.height = 80;
  }
}

let playerBlock = [];
playerBlock.blockOne = createPlayerBlock("playerOneBlock");
let blockTwo = createPlayerBlock("playerTwoBlock");

const playerOne = {
  assignCSS: "createdBlockOne",
  player: playerBlock.blockOne,
  playerBoard: displayBoardOne,
  playerName: "playerOneBlock",
};

const playerTwo = {
  assignCSS: "createdBlockTwo",
  player: blockTwo,
  playerBoard: displayBoardTwo,
  playerName: "playerTwoBlock",
};
// ⛑ removing while loop
function createPlayerBlock(player) {
  let newBlock;
  if (player === "playerOneBlock") {
    return (newBlock = playerOneBlock());
  }
  if (player === "playerTwoBlock") {
    return (newBlock = playerTwoBlock());
  }
}

function checkPlayer(object) {
  return object === "playerOne" ? playerOne : playerTwo;
}

function playerOneBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 3) * 100 + 50);
}

function playerTwoBlock() {
  return new makeBlock(Math.floor(Math.random() * 4 + 6) * 100 + 1050);
}

function displayPlayerBlock(player) {
  let draw = checkPlayer(player);
  drawBlock(draw.player, draw.playerBoard, draw.assignCSS);
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

function moveBlock(player) {
  let playerBlock = checkPlayer(player);
  let tempBlock = blockSpeed(playerBlock.player);

  const oneBlock = document.querySelector(".createdBlockOne");
  oneBlock.style.top = `${tempBlock.y_axis}px`;
  displayBoardOne.appendChild(oneBlock);
}

function reDrawBlock(object = "playerOne") {
  console.log(`🚀  file: block.js:66  block:`, playerBlock.blockOne);
  console.log(`🚀  file: block.js:66  block:`, typeof playerBlock.blockOne);

  let tempPlayer = checkPlayer(object);

  console.log(`🚀  file: block.js:91  tempPlayer:`, tempPlayer);
  console.log("userOne : " + playerBlock, "block : " + playerBlock.blockOne);
  console.log(tempPlayer.player === "makeBlock" ? true : false);

  if (!tempPlayer.player) {
    tempPlayer.player = createPlayerBlock(tempPlayer.playerName);
    tempPlayer.playerBoard;
  }
}

function deletedDisplayBlock(assignCSS = ".createdBlockOne") {
  let blockDisplay = Array.from(document.querySelectorAll(`${assignCSS}`));
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
  playerBlock as userOne,
  blockTwo,
  displayPlayerBlock,
  moveBlock,
  reDrawBlock,
  deletedDisplayBlock,
  deleteObjectBlock,
};
