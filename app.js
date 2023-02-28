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

let boardDos = {
  width: 610,
  height: 525,
};

let player = {
  x_axis: 560,
  y_axis: 670,
  width: 180,
  height: 80,
};

let playerTwo = {
  x_axis: 1850,
  y_axis: 670,
  width: 180,
  height: 80,
};

class makeBlock {
  constructor(x_axis, y_axis, width, height) {
    this.x_axis = x_axis;
    this.y_axis = y_axis;
    this.width = width;
    this.height = height;
  }
}

let block;
let blockTwo;
let scoreBoard = 0;
let scoreBoardDos = 0;

let boardOne = document.querySelector(".gridBlock");
let boardTwo = document.querySelector(".gridBlockC2");

let playerUno = document.querySelector(".grid14");
let playerDos = document.querySelector(".grid14C2");

let scoreBoardOne = document.querySelector(".leftScore");
let scoreBoardTwo = document.querySelector(".rightScore");

//Creating block
block = newBlock();
blockTwo = newBlockTwo();

//Properties for player one board
boardOne.style.width = board.width + "px";
boardOne.style.height = board.height + "px";
boardOne.style.backgroundColor = "red";

//Properties for player two board
boardTwo.style.width = boardDos.width + "px";
boardTwo.style.height = boardDos.height + "px";
boardTwo.style.backgroundColor = "blue";

//Properties for player two board
boardTwo.style.width = board.width + "px";
boardTwo.style.height = board.height + "px";

//Drawing player one into HTML
playerUno.style.left = player.x_axis + "px";
playerUno.style.top = player.y_axis + "px";
playerUno.style.width = player.width + "px";
playerUno.style.height = player.height + "px";
playerUno.style.backgroundColor = "black";

//Drawing player two into HTML
playerDos.style.left = playerTwo.x_axis + "px";
playerDos.style.top = playerTwo.y_axis + "px";
playerDos.style.width = playerTwo.width + "px";
playerDos.style.height = playerTwo.height + "px";
playerDos.style.backgroundColor = "white";

//Scoreboard for player one and two
scoreBoardOne.innerHTML = `${scoreBoard} pts.`;
scoreBoardTwo.innerHTML = `${scoreBoardDos} pts.`;

console.log(blockPosition);
console.log(blockTwoPosition);

//Function to create new block at random locations in the x-axis
function blockPosition() {
  return {
    x_axis: Math.floor(Math.random() * 4 + 3) * 100 + 50,
    y_axis: 300,
    width: 180,
    height: 80,
  };
}

//Function to create new block at random locations in the x-axis
function blockTwoPosition() {
  return {
    x_axis: Math.floor(Math.random() * 4 + 6) * 100 + 1050,
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

//Generate New Blocks
function newBlockTwo() {
  let createBlock;
  while (createBlock == null) {
    createBlock = blockTwoPosition();
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

//Player two draw block
function drawBlocksTwo(object) {
  let newBlock = document.createElement("div");
  newBlock.setAttribute("class", "createdBlockTwo");
  newBlock.style.left = object.x_axis + "px";
  newBlock.style.top = object.y_axis + "px";
  newBlock.style.width = object.width + "px";
  newBlock.style.height = object.height + "px";
  newBlock.style.position = "absolute";
  boardTwo.appendChild(newBlock);
}

//function to display block to HTML
function displayBlock() {
  drawBlocks(block);
  drawBlocksTwo(blockTwo);
}

//Moving blocks in the player one screen
function movingBlock() {
  let movingBlock = block;
  let blockMove = document.querySelector(".createdBlock");

  movingBlock.y_axis += Math.floor(Math.random() * 5 + 1) * 10; //Block moving speed
  console.log(movingBlock);
  block = movingBlock;
  blockMove.style.top = movingBlock.y_axis + "px"; //assign block at new location
  boardOne.append(blockMove); // draws the block at new location

  collisionToPlayer(movingBlock);

  collisionToFloor(movingBlock);

  // gameOver();

  if (block === null || block === undefined || block === "") {
    block = newBlock();
    displayBlock();
  }
}

//Moving block in the player two screen
function movingBlockTwo() {
  let movingBlock = blockTwo;
  let blockMove = document.querySelector(".createdBlock");

  movingBlock.y_axis += Math.floor(Math.random() * 5 + 1) * 10; //Block moving speed
  console.log(movingBlock);
  blockTwo = movingBlock;
  blockMove.style.top = movingBlock.y_axis + "px"; //assign block at new location
  boardOne.append(blockMove); // draws the block at new location

  collisionToPlayerTwo(movingBlock);

  collisionToFloorTwo(movingBlock);

  // gameOver();

  if (blockTwo === null || blockTwo === undefined || blockTwo === "") {
    blockTwo = newBlockTwo();
    displayBlock();
  }
}

//Collision detection between falling block and player One
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

    let blockDisplay = Array.from(document.querySelectorAll(".createdBlock")); //Creates an array from div
    blockDisplay[0].style.backgroundColor = "green";
    blockDisplay[0].classList.remove("createdBlock"); //Removes class list assigned
    blockDisplay[0].remove(); //Remove element

    delete movingBlock.x_axis;
    delete movingBlock.y_axis;
    delete movingBlock.height;
    delete movingBlock.width;

    block = "";
  }
}

//Collision detection between falling block and player Two
function collisionToPlayerTwo(movingBlock) {
  if (
    movingBlock.y_axis >= player.y_axis + player.height ||
    movingBlock.y_axis + movingBlock.height < player.y_axis ||
    movingBlock.x_axis >= player.x_axis + player.width ||
    movingBlock.x_axis + movingBlock.width <= player.x_axis
  ) {
    console.log("No Collision Detected To Player!");
  } else {
    scoreBoardDos += 10;
    scoreBoardTwo.innerHTML = `${scoreBoardDos} pts`;

    let blockDisplay = Array.from(document.querySelectorAll(".createdBlock")); //Creates an array from div
    blockDisplay[0].style.backgroundColor = "green";
    blockDisplay[0].classList.remove("createdBlock"); //Removes class list assigned
    blockDisplay[0].remove(); //Remove element

    delete movingBlock.x_axis;
    delete movingBlock.y_axis;
    delete movingBlock.height;
    delete movingBlock.width;

    blockTwo = "";
  }
}

//Collision detection between falling block and floor for Player One
function collisionToFloor(movingBlock) {
  if (movingBlock.y_axis <= 750 || block === "") {
    console.log("No Collision Detected To Floor!");
  } else {
    console.log("Collision to the floor");
    scoreBoard -= 10;
    scoreBoardOne.innerHTML = `${scoreBoard} pts`;

    let blockDisplay = Array.from(document.querySelectorAll(".createdBlock"));
    blockDisplay[0].style.backgroundColor = "brown";
    blockDisplay[0].classList.remove("createdBlock");
    blockDisplay[0].remove();

    delete movingBlock.x_axis;
    delete movingBlock.y_axis;
    delete movingBlock.height;
    delete movingBlock.width;

    block = "";
  }
}

//Collision detection between falling block and floor for Player Two
function collisionToFloorTwo(movingBlock) {
  if (movingBlock.y_axis <= 750 || block === "") {
    console.log("No Collision Detected To Floor!");
  } else {
    console.log("Collision to the floor");
    scoreBoardDos -= 10;
    scoreBoardTwo.innerHTML = `${scoreBoardDos} pts`;

    let blockDisplay = Array.from(document.querySelectorAll(".createdBlock"));
    blockDisplay[0].style.backgroundColor = "brown";
    blockDisplay[0].classList.remove("createdBlock");
    blockDisplay[0].remove();

    delete movingBlock.x_axis;
    delete movingBlock.y_axis;
    delete movingBlock.height;
    delete movingBlock.width;

    blockTwo = "";
  }
}

//Start Game Button
function startGame() {
  let startButton = document.querySelector(".start");

  displayBlock();

  startButton.addEventListener("click", (begin) => {
    timer = setInterval(movingBlock, 250);
    timer2 = setInterval(movingBlockTwo, 250)
  });
}

//Reset Game
function resetGame() {
  let resetButton = document.querySelector(".reset");

  resetButton.addEventListener("click", () => {
    window.location = "/";
  });
}

function gameOver() {
  if (scoreBoard == 10) {
    scoreBoardOne.innerHTML = "YOU WIN";
    scoreBoardTwo.innerHTML = "YOU LOSE";
    clearInterval(timer);
  }

  if (scoreBoard == -10) {
    scoreBoardOne.innerHTML = "YOU LOSE";
    clearInterval(timer);
  }
}

boardTwo.addEventListener("pointerdown", (e) => {
  console.log(e);
});

//Player's movement
let keyPress = [];

onkeydown = onkeyup = function (movePlayer) {
  keyPress[movePlayer.key] = movePlayer.type = "keydown";
  if (movePlayer.key == "ArrowRight" && player.x_axis < 760) {
    player.x_axis += 10;
    playerUno.style.left = player.x_axis + "px";
  }

  if (movePlayer.key == "ArrowLeft" && player.x_axis > 350) {
    player.x_axis -= 10;
    playerUno.style.left = player.x_axis + "px";
  }

  if (movePlayer.key == "d" && playerTwo.x_axis < 2030) {
    playerTwo.x_axis += 10;
    playerDos.style.left = playerTwo.x_axis + "px";
  }

  if (movePlayer.key == "a" && playerTwo.x_axis > 1620) {
    playerTwo.x_axis -= 10;
    playerDos.style.left = playerTwo.x_axis + "px";
  }
};

// document.onkeydown = (movePlayer) => {
//   console.log(movePlayer);

//   if (movePlayer.key == 'ArrowRight' && player.x_axis < 760) {
//     player.x_axis += 10;
//     playerUno.style.left = player.x_axis + 'px';
//   }

//   if (movePlayer.key == 'ArrowLeft' && player.x_axis > 350) {
//     player.x_axis -= 10;
//     playerUno.style.left = player.x_axis + 'px';
//   }

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
// };

// document.onkeydown = (movePlayerTwo)=>{
//   if (movePlayerTwo.key == 'd' && playerTwo.x_axis <2030){
//     playerTwo.x_axis += 10;
//     playerDos.style.left = playerTwo.x_axis + 'px';
//   }

//   if (movePlayerTwo.key == 'a' && playerTwo.x_axis >1620){
//     playerTwo.x_axis -= 10;
//     playerDos.style.left = playerTwo.x_axis + 'px';}
// }

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
