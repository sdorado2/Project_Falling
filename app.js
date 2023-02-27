// draw player's avatar into last grid
// dot of player : center

// Scoreboard
// Round : Collect 10 objects
// Round : Collect 15 objects *Increase speed
// Round : Collect 20 objects *increase speed x2

// Game State
// Win State
// Lose State
// Reset Button

// Rounds
// Increase Speed per round

// player's movement (Player located in Grid 14)
// player move to left of grid
// player move to right of grid

// object falling from the top to the bottom of the screen.
// object falling from top left
// object falling from top center
// object falling from top right

// Detect if object hit player or floor AKA Collision Detection

let board = {
  width: 610,
  height: 525,
};

let player = {
  x_axis: 560,
  y_axis: 675,
  width: 182,
  height: 78,
};

class makeBlock {
  constructor(x_axis, y_axis, width, height) {
    this.x_axis = x_axis;
    this.y_axis = y_axis;
    this.width = width;
    this.height = height;
  }
}

// let blocks = [
//   new makeBlock(350, 300, 180, 80),
//   new makeBlock(550, 300, 180, 80),
//   new makeBlock(750, 300, 180, 80),
// ];

let scoreBoard = 0;

let boardOne = document.querySelector(".gridBlock");
let boardTwo = document.querySelector(".playerTwo");
let playerUno = document.querySelector(".grid14");
let scoreBoardOne = document.querySelector(".leftScore");

//Properties for player one board
boardOne.style.width = board.width + "px";
boardOne.style.height = board.height + "px";
boardOne.style.backgroundColor = "red";

//Properties for player two board
boardTwo.style.width = board.width + "px";
boardTwo.style.height = board.height + "px";

//Drawing player one into HTML
playerUno.style.left = player.x_axis + "px";
playerUno.style.top = player.y_axis + "px";
playerUno.style.width = player.width + "px";
playerUno.style.height = player.height + "px";
playerUno.style.backgroundColor = "black";

//Scoreboard for player one
scoreBoardOne.innerHTML = `${scoreBoard} pts.`;

//Creating div, class, and properties to each block
// blocks.forEach((createblock) => {
//   let newBlock = document.createElement("div");
//   newBlock.setAttribute("class", "createdBlock");
//   newBlock.style.left = createblock.x_axis + "px";
//   newBlock.style.top = createblock.y_axis + "px";
//   newBlock.style.width = createblock.width + "px";
//   newBlock.style.height = createblock.height + "px";
//   newBlock.style.position = "absolute";
//   boardOne.appendChild(newBlock);
// });

let block = newBlock();
console.log(blockPosition);

function blockPosition() {
  return {
    x_axis: Math.floor(Math.random() * 4 + 3) * 100 + 50,
    y_axis: 300,
    width: 180,
    height: 80,
  };
}

//Generate New Blocks
function newBlock() {
  let createBlock;
  while (createBlock == null) {
    createBlock = blockPosition();
  }
  return createBlock;
}

//function for drawing blocks
function drawBlocks(object) {
  let newBlock = document.createElement("div");
  newBlock.setAttribute("class", "createdBlock");
  newBlock.style.left = object.x_axis + "px";
  newBlock.style.top = object.y_axis + "px";
  newBlock.style.width = object.width + "px";
  newBlock.style.height = object.height + "px";
  newBlock.style.position = "absolute";
  boardOne.appendChild(newBlock);
}

//function to display block to HTML
function displayBlock() {
  drawBlocks(block);
  // for (let index = 0; index < 2; index++) {
  //   if (blocks.length == 0 || blocks.length === null) {
  //     break;
  //   }
  //   if (blocks[index + 1].x_axis === 550) {
  //     drawBlocks(blocks[index]);
  //     drawBlocks(blocks[index +2 ]);
  //     break;
  //   }
  //   if (blocks[index].x_axis === 350 && blocks[index + 1].x_axis === 550) {
  //     drawBlocks(blocks[index + 2]);
  //     break;
  //   }
  // }
}

//Moving blocks in the screen
function movingBlock() {
  //Block moving speed
  // blocks.forEach((movingBlock) => {
  let movingBlock = block;
  let blockMove = document.querySelector(".createdBlock");
  movingBlock.y_axis += Math.floor(Math.random() * 5 + 1) * 10;
  console.log(movingBlock);
  block = movingBlock;
  blockMove.style.top = movingBlock.y_axis + "px";
  boardOne.append(blockMove);
  // });

  collisionToPlayer(movingBlock);

  collisionToFloor(movingBlock);
}

//Collision detection between falling block and player
function collisionToPlayer(movingBlock) {
  if (
    movingBlock.y_axis >= player.y_axis + player.height ||
    movingBlock.y_axis + movingBlock.height < player.y_axis ||
    movingBlock.x_axis >= player.x_axis + player.width ||
    movingBlock.x_axis + movingBlock.width <= player.x_axis
  ) {
    console.log("No Collision Detected To Player!");
  } else {
    scoreBoard += 10;
    scoreBoardOne.innerHTML = `${scoreBoard} pts`;

    let blockDisplay = Array.from(document.querySelectorAll(".createdBlock"));
    blockDisplay.style.backgroundColor = "green";
    blockDisplay.classList.remove("createdBlock");
    blockDisplay.remove();
    movingBlock.splice(index, 1);
  }
}

//Collision detection between falling block and floor
function collisionToFloor(movingBlock) {
  if (movingBlock.y_axis <= 750) {
    console.log("No Collision Detected To Floor!");
  } else {
    console.log("Collision to the floor");
    scoreBoard -= 10;
    scoreBoardOne.innerHTML = `${scoreBoard} pts`;

    let blockDisplay = Array.from(document.querySelectorAll(".createdBlock"));
    blockDisplay.style.backgroundColor = "brown";
    blockDisplay.classList.remove("createdBlock");
    blockDisplay.remove();
    blockDisplay.splice(index, 1);
  }
}

//Start Game Button
function startGame() {
  let startButton = document.querySelector(".start");

  displayBlock();

  startButton.addEventListener("click", (begin) => {
    timer = setInterval(movingBlock, 200);
  });
}

//Reset Game
function resetGame() {
  let resetButton = document.querySelector(".reset");

  resetButton.addEventListener("click", () => {
    window.location = "/";
  });
}

boardOne.addEventListener("pointerdown", (e) => {
  console.log(e);
});

//Player's movement
document.onkeydown = (movePlayer) => {
  console.log(movePlayer);

  if (movePlayer.key == "ArrowRight" && player.x_axis < 760) {
    player.x_axis += 10;
    playerUno.style.left = player.x_axis + "px";

    // if (checkDetection(blocks, player)) {
    //   console.log('No Collision');
    // } else {
    //   console.log('collision!!!');
    //   let changeColor = document.querySelector('.createdBlock');
    //   changeColor.style.backgroundColor = 'green';
    //   blocks.append(changeColor);
    // }
  }

  if (movePlayer.key == "ArrowLeft" && player.x_axis > 350) {
    player.x_axis -= 10;
    playerUno.style.left = player.x_axis + "px";

    // if (checkDetection(blocks, player)) {
    //   console.log('Collision');
    // } else {
    //   let changeColor = document.querySelector('.createdBlock');
    //   changeColor.style.backgroundColor = 'green';
    //   blocks.append(changeColor);
    // }
  }

  // if (movePlayer.key == "ArrowDown") {
  //   player.y_axis += 50;
  //   playerUno.style.top = player.y_axis + "px";
  // }

  // if (movePlayer.key == "ArrowUp") {
  //   player.y_axis -= 50;
  //   playerUno.style.top = player.y_axis + "px";
  //   if (checkDetection(player, blocks)) {
  //     let changeColor = document.querySelector(".createdBlock");
  //     changeColor.style.backgroundColor = "green";
  //   }
  // }
};

function checkDetection(objA, ObjB) {
  let response;
  for (let index = 0; index < blocks.length; index++) {
    if (!collisionDetect(objA[index], ObjB)) {
      response = false;
    }
    response = true;
  }
  return response;
}

let collisionDetect = (objA, ObjB) => {
  return (
    objA.y_axis >= ObjB.y_axis + ObjB.height ||
    objA.y_axis + objA.height < ObjB.y_axis ||
    objA.x_axis >= ObjB.x_axis + ObjB.width ||
    objA.x_axis + objA.width <= ObjB.x_axis
  );
};

startGame();

resetGame();
