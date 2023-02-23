// draw player's avatar into last grid
// location of player : center

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
  height: 510,
};

let player = {
  x_axis: 0,
  y_axis: 0,
  width: 182,
  height: 78,
};

let blocks = [
  { x_axis: 0, y_axis: 0, width: 182, height: 78 },
  { x_axis: 0, y_axis: 0, width: 182, height: 78 },
  { x_axis: 0, y_axis: 0, width: 182, height: 78 },
];

let boardOne = document.querySelector(".playerOne");
let boardTwo = document.querySelector(".playerTwo");
let playerUno = document.querySelector(".grid14");

boardOne.style.width = board.width + "px";
boardOne.style.height = board.height + "px";
boardOne.style.backgroundColor = "red";

boardTwo.style.width = board.width + "px";
boardTwo.style.height = board.height + "px";

playerUno.style.width = player.width + "px";
playerUno.style.height = player.height + "px";
playerUno.style.backgroundColor = "black";

blocks.forEach((createblock) => {
  let block = document.createElement("div");
  block.setAttribute("class", "createdBlock");
  block.style.left = createblock.x_axis + "px";
  block.style.top = createblock.y_axis + "px";
  block.style.width = createblock.width + "px";
  block.style.height = createblock.height + "px";
  block.style.backgroundColor = "blue";
  boardOne.appendChild(block);
});

// blocks.forEach((moveBlocks) => {
//     for (let index = 0 ; index < blocks.length; index++){
//         moveBlocks.y_axis += 50;
//   }
// });

document.onkeydown = (movePlayer) => {
  console.log(movePlayer);

  if (movePlayer.key == "ArrowRight") {
    player.x_axis += 50;
    playerUno.style.left = player.x_axis + "px";
    b
  locks.forEach((moveBlocks) => {
      moveBlocks.y_axis += 50;
      let blockMove = document.querySelector(".createdBlock");
      for (let index = 0; index < b
      locks.length; index++) {
        blockMove.style.top = moveBlocks.y_axis + "px";
      }
      boardOne.append(blockMove)
    });
  }

  if (movePlayer.key == "ArrowLeft" && player.x_axis > 0) {
    player.x_axis -= 50;
    playerUno.style.left = player.x_axis + "px";
  }
  if (movePlayer.key == "ArrowDown") {
    player.y_axis += 50;
    playerUno.style.top = player.y_axis + "px";
  }

  if (movePlayer.key == "ArrowUp") {
    player.y_axis -= 50;
    playerUno.style.top = player.y_axis + "px";
    if (checkCollision(player, block))
  }
};

let checkCollision =(objA, objB)=>{
  return (
    objA.x_axis >= objB.x_axis + objB.width||
    objA.x_axis + objA.width <= objB.x_axis ||
    objA.y_axis >= objB.y_axis + objB.height ||
    objA.y_axis + objA.height < objB.y_axis
  )
}