const templateBoard = { width: 38.125, height: 32.813 };

const displayBoardOne = buildBoard("tomato", "gridBlock");
const displayBoardTwo = buildBoard("steelblue", "gridBlockC2");

function buildBoard(color, parentName) {
	const parent = document.querySelector(`.${parentName}`);
	const addStyle = ` width : ${templateBoard.width}em;
	height : ${templateBoard.height}; background-color: ${color}`;
	parent.style.cssText = addStyle;
	return parent;
}

// const displayBoardOne = document.querySelector(".gridBlock");
// const styleBoardOne = `
//     width : ${templateBoard.width}em;
//     height : ${templateBoard.height}em;
//     background-color : tomato;
// `;
// displayBoardOne.style.cssText = styleBoardOne;

// const displayBoardTwo = document.querySelector(".gridBlockC2");
// const styleBoardTwo = `
//     width : ${templateBoard.width}em;
//     height : ${templateBoard.height}em;
//     background-color : steelblue;
// `;
// displayBoardTwo.style.cssText = styleBoardTwo;

export { displayBoardOne, displayBoardTwo };
