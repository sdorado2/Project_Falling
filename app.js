import { playerOne, playerTwo } from "/player.js";
import { displayBoardOne, displayBoardTwo } from "/board.js";
import {
  playerBlock,
  blockTwo,
  displayPlayerBlock,
  moveBlock,
  reDrawBlock,
  deleteObjectBlock,
  deletedDisplayBlock,
} from "/block.js";

// #region
let scorePlayerOne = 0;
const scoreBoardOne = document.querySelector(".leftScore");
scoreBoardOne.innerHTML = `${scorePlayerOne} pts.`;

let scorePlayerTwo = 0;
const scoreBoardTwo = document.querySelector(".rightScore");
scoreBoardTwo.innerHTML = `${scorePlayerTwo} pts.`;
// #endregion

let timer;
//Start Game Button
function startGame() {
  let startButton = document.querySelector(".start");
  // using new new display function
  displayPlayerBlock("playerOne");
  displayPlayerBlock("playerTwo");

  // displayPlayerOneBlock();
  // displayPlayerTwoBlock();

  startButton.addEventListener("click", () => {
    console.log("🚀 start has been pressed!");
    timer = setInterval(() => {
      moveBlock("playerOne");
      collideWithPlayer(playerBlock, playerOne, ".createdBlockOne");
      collideWithFloor(playerBlock, ".createdBlockOne");
      gameOver(); // ❕ stop function from running is game over is true
      reDrawBlock("playerOne");
      // moveBlock(blockTwo, displayBoardTwo, ".createdBlockTwo");
      // collisionToPlayer(blockTwo, playerTwo, ".createdBlockTwo");
    }, 500);
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
  if (scorePlayerOne === 10) {
    scoreBoardOne.innerHTML = "YOU WIN";
    scoreBoardTwo.innerHTML = "YOU LOSE";
    clearInterval(timer);
    return;
  }

  if (scorePlayerTwo === 10) {
    scoreBoardOne.innerHTML = "YOU LOSE";
    scoreBoardTwo.innerHTML = "YOU WIN";
    clearInterval(timer);
  }
}

function checkDetection(objA, objB) {
  return collisionDetect(objA, objB) ? false : true;
}

//If there is not collision return true
let collisionDetect = (objA, ObjB) => {
  return (
    objA.y_axis >= ObjB.y_axis + ObjB.height ||
    objA.y_axis + objA.height < ObjB.y_axis ||
    objA.x_axis >= ObjB.x_axis + ObjB.width ||
    objA.x_axis + objA.width <= ObjB.x_axis
  );
};

//Collision detection between falling block and player One
function collideWithPlayer(object = playerBlock, player = playerOne) {
  let contact = checkDetection(object.blockOne, player);
  if (!contact) {
    console.log("No Collision Detected To Player!");
    return;
  }

  scorePlayerOne += 10;
  scoreBoardOne.innerHTML = `${scorePlayerOne} pts`;

  deletedDisplayBlock(player);
  deleteObjectBlock(object);
}

//Collision detection between falling block and floor for Player One
function collideWithFloor(object = playerBlock, assignCSS = "createdBlockOne") {
  if (!object.blockOne || object.blockOne.y_axis <= 720) {
    console.log("No Collision Detected To Floor!");
    return;
  }

  console.log("Collision to the floor");
  scorePlayerOne -= 10;
  scoreBoardOne.innerHTML = `${scorePlayerOne} pts`;

  deletedDisplayBlock(assignCSS);
  deleteObjectBlock(object);
}

startGame();

resetGame();

//Moving blocks in the player one screen
/* function movingBlock() {
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

  reDrawBlock();
}
 */
