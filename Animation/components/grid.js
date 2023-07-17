import Square from "./square.js";
import Rock from "./rock.js";

class Grid {
  constructor(width, squares) {
    this.width = width;
    this.element = document.querySelector(".grid");
    this.squares = squares;
  }

  addSquares(squares) {
    this.squares = squares;
  }

  getSquares() {
    return this.squares;
  }

  setUp() {
    this.squares.map((square) => {
      this.element.appendChild(square.render());
    });
  }

  render() {
    this.setUp();
    return this.element;
  }
}

export default Grid;
