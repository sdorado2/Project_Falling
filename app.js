import { playerOne, playerTwo } from "/player.js";
import { displayBoardOne, displayBoardTwo } from "/board.js";
import {
  block,
  blockTwo,
  displayPlayerOneBlock,
  displayPlayerTwoBlock,
  moveBlock,
  reDrawBlock,
  deleteObjectBlock,
  deletedDisplayBlock,
} from "/block.js";

// #region
let scorePlayerOne = 0;
let scoreBoardOne = document.querySelector(".leftScore");
scoreBoardOne.innerHTML = `${scorePlayerOne} pts.`;

let scorePlayerTwo = 0;
let scoreBoardTwo = document.querySelector(".rightScore");
scoreBoardTwo.innerHTML = `${scorePlayerTwo} pts.`;
// #endregion

//Start Game Button
function startGame() {
  let startButton = document.querySelector(".start");
  let timer;
  displayPlayerOneBlock();
  displayPlayerTwoBlock();

  startButton.addEventListener("click", () => {
    console.log("🚀 start has been pressed!");
    timer = setInterval(() => {
      moveBlock();
      // collisionToPlayer(block, playerOne, ".createdBlockOne");
      // collisionToFloor(block, ".createdBlockOne");
      // reDrawBlock(block);
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
  if (scoreBoard == 10) {
    scoreBoardOne.innerHTML = "YOU WIN";
    scoreBoardTwo.innerHTML = "YOU LOSE";
    clearInterval(timer);
    clearInterval(timer2);
  }

  if (scoreBoardDos == -10) {
    scoreBoardOne.innerHTML = "YOU LOSE";
    scoreBoardTwo.innerHTML = "YOU WIN";
    clearInterval(timer);
    clearInterval(timer2);
  }
}

function checkDetection(objA, ObjB) {
  let response;
  if (collisionDetect(objA, ObjB)) {
    response = false;
    return response;
  }
  response = true;
  console.log(`🚀  file: app.js:27  response:`, response);
  return response;
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

//Collision detection between falling block and player One
function collisionToPlayer(object = block, player = playerOne, assignCSS) {
  let contact = checkDetection(object, player);
  if (!contact) {
    console.log("No Collision Detected To Player!");
    return;
  }

  scoreBoard += 10;
  scoreBoardOne.innerHTML = `${scoreBoard} pts`;

  deletedDisplayBlock();

  deleteObjectBlock();
}

//Collision detection between falling block and floor for Player One
function collisionToFloor(object = block, assignCSS = ".createdBlockOne") {
  if (object.y_axis <= 720 || object === "") {
    console.log("No Collision Detected To Floor!");
    return;
  }
  console.log("Collision to the floor");
  scoreBoard -= 10;
  scoreBoardOne.innerHTML = `${scoreBoard} pts`;

  let blockDisplay = Array.from(document.querySelectorAll(assignCSS));
  blockDisplay[0].style.backgroundColor = "brown";
  blockDisplay[0].classList.remove("createdBlock");
  blockDisplay[0].remove();

  delete object.x_axis;
  delete object.y_axis;
  delete object.height;
  delete object.width;

  object = undefined;
}

startGame();

resetGame();
