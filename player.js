class createPlayer {
  constructor(x_axis, y_axis, width, height) {
    this.x_axis = x_axis;
    this.y_axis = y_axis;
    this.width = width;
    this.height = height;
  }
}

const playerOne = createPlayer(560, 670, 180, 80);
const displayPlayerOne = document.querySelector(".grid14");
const stylePlayerOne = `
    left = ${playerOne.x_axis}px; 
    top = ${playerOne.y_axis}px; 
    width = ${playerOne.width}px;
    height = ${playerOne.height} px;
    background = black;
`;
displayPlayerOne.style.cssText = stylePlayerOne;

const playerTwo = createPlayer(1850, 670, 180, 80);
const displayPlayerTwo = document.querySelector(".grid14C2");
const stylePlayerTwo = `
    left = ${playerTwo.x_axis}px; 
    top = ${playerTwo.y_axis}px; 
    width = ${playerTwo.width}px;
    height = ${playerTwo.height} px;
    background = white;
`;
displayPlayerTwo.style.cssText = stylePlayerTwo;

export { playerOne, playerTwo };
