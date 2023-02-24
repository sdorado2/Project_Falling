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

let blocks = [
  { x_axis: 350, y_axis: 300, width: 182, height: 78 },
  { x_axis: 550, y_axis: 300, width: 182, height: 78 },
  { x_axis: 750, y_axis: 300, width: 182, height: 78 },
];

let boardOne = document.querySelector(".gridBlock");
let boardTwo = document.querySelector(".playerTwo");
let playerUno = document.querySelector(".grid14");

boardOne.style.width = board.width + "px";
boardOne.style.height = board.height + "px";
boardOne.style.backgroundColor = "red";

boardTwo.style.width = board.width + "px";
boardTwo.style.height = board.height + "px";

playerUno.style.left = player.x_axis + "px";
playerUno.style.top = player.y_axis + "px";
playerUno.style.width = player.width + "px";
playerUno.style.height = player.height + "px";
playerUno.style.backgroundColor = "black";

blocks.forEach((createblock) => {
  let newBlock = document.createElement("div");
  newBlock.setAttribute("class", "createdBlock");
  newBlock.style.left = createblock.x_axis + "px";
  newBlock.style.top = createblock.y_axis + "px";
  newBlock.style.width = createblock.width + "px";
  newBlock.style.height = createblock.height + "px";
  newBlock.style.position = "absolute";
  newBlock.style.backgroundColor = "blue";
  boardOne.appendChild(newBlock);
});

function moveBlock() {
  blocks.forEach((moveBlocks) => {
    let blockMove = document.querySelector(".createdBlock");
    moveBlocks.y_axis += 50;
    blockMove.style.top = moveBlocks.y_axis + "px";
    boardOne.append(blockMove);
  });
    setTimeout(() => moveBlock(), 1 * 1000);
    moveBlock();
}

// if (moveBlock.y_axis < 676) {}
//else{break;}

// moveBlock();
// moveBlock();
// moveBlock();
// moveBlock();
// moveBlock();
// moveBlock();
// moveBlock();

// setInterval(moveBlock(), 30);

// setTimeout(()=> moveBlock() , 1*1000);

// blocks.forEach((moveBlocks) => {
//     for (let index = 0 ; index < blocks.length; index++){
//         moveBlocks.y_axis += 50;
//   }
// });

boardOne.addEventListener("pointerdown", (e) => {
  console.log(e);
});

document.onkeydown = (movePlayer) => {
  console.log(movePlayer);

  if (movePlayer.key == "ArrowRight" && player.x_axis < 770) {
    player.x_axis += 10;
    playerUno.style.left = player.x_axis + "px";
    if (checkDetection(blocks, player )) {
      let changeColor = document.querySelector(".createdBlock");
      changeColor.style.backgroundColor = "green";
      blocks.append(changeColor);
    }
  }

  if (movePlayer.key == "ArrowLeft" && player.x_axis > 350) {
    player.x_axis -= 10;
    playerUno.style.left = player.x_axis + "px";
    if (checkDetection(blocks, player)) {
      let changeColor = document.querySelector(".createdBlock");
      changeColor.style.backgroundColor = "green";
      boardOne.append(changeColor);
    }
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

function checkDetection(objA, objB) {
  let response;
  for (let index = 0; index < blocks.length; index++) {
    if (!collisionDetect(objA[index], objB)) {
      response = false;
    }
    response = true;
  }
  return response;
}

let collisionDetect = (objA, objB) => {
  return (
    objA.y_axis >= objB.y_axis + objB.height ||
    objA.y_axis + objA.height < objB.y_axis ||
    objA.x_axis >= objB.x_axis + objB.width ||
    objA.x_axis + objA.width <= objB.x_axis
  );
};
