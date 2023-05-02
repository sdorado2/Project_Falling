class createPlayer {
  constructor(x_axis) {
    this.x_axis = x_axis;
    this.y_axis = 670;
    this.width = 180;
    this.height = 80;
  }
}

const playerOne = new createPlayer(560);
const displayPlayerOne = document.querySelector(".grid14");
const stylePlayerOne = `
    left : ${playerOne.x_axis}px; 
    top : ${playerOne.y_axis}px; 
    width : ${playerOne.width}px;
    height : ${playerOne.height}px;
    background : black;
`;
displayPlayerOne.style.cssText = stylePlayerOne;

const playerTwo = new createPlayer(1850);
const displayPlayerTwo = document.querySelector(".grid14C2");
const stylePlayerTwo = `
    left : ${playerTwo.x_axis}px; 
    top : ${playerTwo.y_axis}px; 
    width : ${playerTwo.width}px;
    height : ${playerTwo.height}px;
    background : yellow;
`;
displayPlayerTwo.style.cssText = stylePlayerTwo;

export { playerOne, playerTwo };
