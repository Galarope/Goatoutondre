import config from "../config.js";

class Wolf {
  //static numOfWolve = 0;
  location = [];
  direction = 1;
  position = 0;
  name = "wolf";
  directions = config.directions;
  area = config.area;
  squares = [];

  locate(squares) {
    // directions = [1, -1, 10, -10];
    this.squares = squares;

    let firstPosition = 0;
    while (firstPosition <= 10) 
        firstPosition = Math.floor(Math.random() * (this.area - 1));
    
    let secondPosition;
    while (!this.squares[secondPosition])
      secondPosition =
        firstPosition +
        this.directions[Math.floor(Math.random() * this.directions.length)];

    this.position = firstPosition;
    this.location = [firstPosition, secondPosition];


    this.squares[this.position].setStatus(this.name);

    return this.location;
  }

  setDirection() {
    let index = 0;
    while (
      index < this.location.length &&
      this.location[index] === this.position
    ) {
      index += 1;
    }

    let newPosition = this.location[index];
    this.direction = newPosition - this.position;
  }

  move() {
    this.setDirection();
    const prevPosition = this.position;
    this.squares[prevPosition].setStatus("");

    this.position = this.position + this.direction;
    this.squares[this.position].setStatus(this.name);
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }
}

export default Wolf;
