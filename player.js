class createPlayer {
  constructor(x_axis, y_axis, width, height) {
    this.x_axis = x_axis;
    this.y_axis = y_axis;
    this.width = width;
    this.height = height;
  }
}

const playerOne = createPlayer(560, 670, 180, 80);

const playerTwo = createPlayer(1850, 670, 180, 80);

export { playerOne, playerTwo };
