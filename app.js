import { playerOne, playerTwo } from "/player.js";
import { displayBoardOne, displayBoardTwo } from "./board.js";
import {
  displayPlayerOneBlock,
  displayPlayerTwoBlock,
  moveBlockBoardOne,
  moveBlockBoardTwo,
} from "/block.js";

let scoreBoard = 0;
let scoreBoardDos = 0;

let scoreBoardOne = document.querySelector(".leftScore");
let scoreBoardTwo = document.querySelector(".rightScore");

//Scoreboard for player one and two
scoreBoardOne.innerHTML = `${scoreBoard} pts.`;
scoreBoardTwo.innerHTML = `${scoreBoardDos} pts.`;

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

  gameOver();

  if (block === null || block === undefined || block === "") {
    block = createPlayerOneBlock();
    displayPlayerOneBlock();
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
    console.log(blockDisplay);
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

//Moving block in the player two screen
function movingBlockTwo() {
  let movingBlock = blockTwo;
  let blockMove = document.querySelector(".createdBlockTwo");

  movingBlock.y_axis += Math.floor(Math.random() * 5 + 1) * 10; //Block moving speed
  console.log(movingBlock);
  blockTwo = movingBlock;
  blockMove.style.top = movingBlock.y_axis + "px"; //assign block at new location
  boardTwo.append(blockMove); // draws the block at new location

  collisionToPlayerTwo(movingBlock);

  collisionToFloorTwo(movingBlock);

  gameOver();

  if (blockTwo === null || blockTwo === undefined || blockTwo === "") {
    blockTwo = newBlockTwo();
    displayBlockTwo();
  }
}

//Collision detection between falling block and player Two
function collisionToPlayerTwo(movingBlock) {
  if (
    movingBlock.y_axis >= playerTwo.y_axis + playerTwo.height ||
    movingBlock.y_axis + movingBlock.height < playerTwo.y_axis ||
    movingBlock.x_axis >= playerTwo.x_axis + playerTwo.width ||
    movingBlock.x_axis + movingBlock.width <= playerTwo.x_axis
  ) {
    console.log("No Collision Detected To Player!");
  } else {
    scoreBoardDos += 10;
    scoreBoardTwo.innerHTML = `${scoreBoardDos} pts`;

    let blockDisplay = Array.from(
      document.querySelectorAll(".createdBlockTwo")
    ); //Creates an array from div
    blockDisplay[0].style.backgroundColor = "green";
    blockDisplay[0].classList.remove("createdBlockTwo"); //Removes class list assigned
    blockDisplay[0].remove(); //Remove element

    delete movingBlock.x_axis;
    delete movingBlock.y_axis;
    delete movingBlock.height;
    delete movingBlock.width;

    blockTwo = "";
  }
}

//Collision detection between falling block and floor for Player Two
function collisionToFloorTwo(movingBlock) {
  if (movingBlock.y_axis <= 750 || blockTwo === "") {
    console.log("No Collision Detected To Floor!");
  } else {
    console.log("Collision to the floor");
    scoreBoardDos -= 10;
    scoreBoardTwo.innerHTML = `${scoreBoardDos} pts`;

    let blockDisplay = Array.from(
      document.querySelectorAll(".createdBlockTwo")
    );
    blockDisplay[0].style.backgroundColor = "brown";
    blockDisplay[0].classList.remove("createdBlockTwo");
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
  let timer, timer2;
  displayPlayerOneBlock();
  displayPlayerTwoBlock();

  startButton.addEventListener("click", () => {
    console.log("🚀 start has been pressed!");
    timer = setInterval(() => {
      moveBlockBoardOne();
      moveBlockBoardTwo();
    }, 1000);
    // timer2 = setInterval(function () {
    // }, 249);
    // ? Unable to run both setInterval at the same time
    // ? block disappear when render
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
  if (scoreBoard == 30) {
    scoreBoardOne.innerHTML = "YOU WIN";
    scoreBoardTwo.innerHTML = "YOU LOSE";
    clearInterval(timer);
    clearInterval(timer2);
  }

  if (scoreBoardDos == 30) {
    scoreBoardOne.innerHTML = "YOU LOSE";
    scoreBoardTwo.innerHTML = "YOU WIN";
    clearInterval(timer);
    clearInterval(timer2);
  }
}

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
