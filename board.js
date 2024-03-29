const templateBoard = { width: 610, height: 525 };

const displayBoardOne = document.querySelector(".gridBlock");
const styleBoardOne = `
    width : ${templateBoard.width}px;
    height : ${templateBoard.height}px;
    background-color : tomato; 
`;
displayBoardOne.style.cssText = styleBoardOne;

const displayBoardTwo = document.querySelector(".gridBlockC2");
const styleBoardTwo = `
    width : ${templateBoard.width}px;
    height : ${templateBoard.height}px;
    background-color : steelblue;
`;
displayBoardTwo.style.cssText = styleBoardTwo;

export { displayBoardOne, displayBoardTwo };
