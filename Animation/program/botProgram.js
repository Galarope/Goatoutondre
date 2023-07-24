import Graph from "../graph/graph.js";
import Program from "./program.js";

class BotProgram extends Program {
  destination = 0;
  path = [];

  constructor(squares, goat, scoreDisplay, levelDisplay) {
    super(squares, goat);
    this.graph = new Graph();
    this.scoreDisplay = scoreDisplay;
    this.levelDisplay = levelDisplay;
  }

  setNextDestination() {
    const currentPosition = this.goat.getPosition();
    const left = this.squares.slice(0, currentPosition);
    const right = this.squares.slice(currentPosition + 1, this.squares.length);
    let nearestFromLeft;
    let nearestFromRight;

    for (let i = left.length - 1; i >= 0; i--) {
      if (left[i].getStatus() === "grass") {
        nearestFromLeft = left[i].getIndex();
        break;
      }
    }

    for (let j = 0; j < right.length; j++) {
      if (right[j].getStatus() === "grass") {
        nearestFromRight = right[j].getIndex();
        break;
      }
    }

    if (!nearestFromRight) return (this.destination = nearestFromLeft);

    if (!nearestFromLeft) return (this.destination = nearestFromRight);

    const diffLeft = Math.abs(currentPosition - nearestFromLeft);
    const diffRight = Math.abs(currentPosition - nearestFromRight);

    if (diffLeft <= diffRight) this.destination = nearestFromLeft;
    else this.destination = nearestFromRight;
  }

  setDirection() {
    if (this.path.length === 0) this.setNextDestination();

    const currentPosition = this.goat.getPosition();

    this.path = this.graph.findShortestPath(currentPosition, this.destination);

    const nextSquare = this.path.shift();
    const newDirection = nextSquare - currentPosition;

    this.goat.setDirection(newDirection);
  }

  updateSquares() {
    const currentPosition = this.goat.getPosition();
    this.squares[currentPosition].setStatus("");

    this.goat.move();
    this.wolf.move();

    const newPosition = this.goat.getPosition();

    if (this.squares[newPosition].getStatus() === "grass") {
      this.score += 1;
      this.scoreDisplay.textContent = this.score;
    }

    this.squares[newPosition].setStatus(this.goat.getName());
  }

  proceedToNextLvl() {
    if (this.intervalTime <= 0)
      this.restart();
    
    this.pause();
    this.prevScore = this.score;

    this.level += 1;
    this.levelDisplay.textContent = this.level;
    
    this.intervalTime = this.intervalTime * this.speed;
    this.restart();
  }

  onInit() {
    this.scoreDisplay.textContent = this.score;
    this.levelDisplay.textContent = this.level;

    for (let square of this.squares) this.graph.addNode(square.getIndex());

    for (let square of this.squares) {
      for (let neighbor of square.getNeighbors()) {
        this.graph.addEdge(square.getIndex(), neighbor, 1);
      }
    }
  }

  doExecute() {
    if ((this.score - this.prevScore) === this.area - (this.obstacles.length + 1))
      this.proceedToNextLvl();

    this.setDirection();
    this.updateSquares();
  }

  onExit() {
    for (let session in this.timeoutSessions)
      clearTimeout(this.timeoutSessions[session]);
  }
}

export default BotProgram;