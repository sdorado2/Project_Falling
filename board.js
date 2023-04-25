class createBoard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const boardOne = new createBoard(610, 525);
console.log(boardOne.width);
const displayBoardOne = document.querySelector(".gridBlock");
const styleBoardOne = `
    width : ${boardOne.width}px;
    height : ${boardOne.height}px;
    background-color : red; 
`;
displayBoardOne.style.cssText = styleBoardOne;

const boardTwo = new createBoard(610, 525);
const displayBoardTwo = document.querySelector(".gridBlockC2");
const styleBoardTwo = `
    width : ${boardTwo.width} px;
    height : ${boardTwo.height} px;
    background-color : blue;
`;
displayBoardTwo.style.cssText = styleBoardTwo;

export { boardOne, boardTwo };
