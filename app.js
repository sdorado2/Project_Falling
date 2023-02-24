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

let blocks = [
  new makeBlock(350, 300, 180, 80),
  new makeBlock(550, 300, 180, 80),
  new makeBlock(750, 300, 180, 80),
  // { x_axis: 350, y_axis: 300, width: 182, height: 78 },
  // { x_axis: 550, y_axis: 300, width: 182, height: 78 },
  // { x_axis: 750, y_axis: 300, width: 182, height: 78 },
];

let timer;

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

function movingBlock() {
  blocks.forEach((movingBlock) => {
    let blockMove = document.querySelector(".createdBlock");
    movingBlock.y_axis += Math.floor(Math.random() * 50);
    console.log(movingBlock);
    blockMove.style.top = movingBlock.y_axis + "px";
    boardOne.append(blockMove);
  });

  for (index = 0; index < blocks.length; index++) {
    if (
      blocks[index].y_axis >= player.y_axis + player.height ||
      blocks[index].y_axis + blocks[index].height < player.y_axis ||
      blocks[index].x_axis >= player.x_axis + player.width ||
      blocks[index].x_axis + blocks[index].width <= player.x_axis
    ) {
      console.log("No Collision Detected!");
    } else {
      console.log(`Collision with ${blocks[0]})`);
      let blockDisplay = Array.from(document.querySelectorAll('.createdBlock'));
      blockDisplay[index].classList.remove('createdBlock')
      blocks.splice(index,1);
      // clearInterval(timer);
      // blocks[0].style.backgroundColor = "yellow";
      // boardOne.append(blocks[index]);
    }
  }
}

if (blocks[0].y_axis <= 650) {
  timer = setInterval(movingBlock, 250);
} else {
  clearInterval(timer);
  console.log("It went over the limit.");
}

boardOne.addEventListener("pointerdown", (e) => {
  console.log(e);
});

document.onkeydown = (movePlayer) => {
  console.log(movePlayer);

  if (movePlayer.key == "ArrowRight" && player.x_axis < 770) {
    player.x_axis += 10;
    playerUno.style.left = player.x_axis + "px";

    if (checkDetection(blocks, player)) {
      console.log("No Collision");
    } else {
      console.log ('collision!!!')
      let changeColor = document.querySelector(".createdBlock");
      changeColor.style.backgroundColor = "green";
      blocks.append(changeColor);
    }
  }

  if (movePlayer.key == "ArrowLeft" && player.x_axis > 350) {
    player.x_axis -= 10;
    playerUno.style.left = player.x_axis + "px";

    if (checkDetection(blocks, player)) {
      console.log("Collision");
    } else {
      let changeColor = document.querySelector(".createdBlock");
      changeColor.style.backgroundColor = "green";
      blocks.append(changeColor);
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
