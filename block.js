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
  // if (player === "playerOneBlock") return playerOneBlock();
  // if (player === "playerTwoBlock") return playerTwoBlock();
  return player === "playerOneBlock" ? playerOneBlock() : playerTwoBlock();
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
  let tempPlayer = checkPlayer(object);
  console.log(`🚀  file: block.js:83  tempPlayer:`, tempPlayer);
  const PLAYER = tempPlayer?.["player"];
  if (!PLAYER) {
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
  console.log(`🚀  file: block.js:97  object:`, object);
  delete object.blockOne.x_axis;
  delete object.blockOne.y_axis;
  delete object.blockOne.width;
  delete object.blockOne.height;
  delete object.blockOne;
  console.log(`🚀  file: block.js:106  object:`, object);
}

export {
  playerBlock,
  blockTwo,
  displayPlayerBlock,
  moveBlock,
  reDrawBlock,
  deletedDisplayBlock,
  deleteObjectBlock,
};
