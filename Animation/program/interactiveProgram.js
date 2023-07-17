import Program from "./program.js";

class InteractiveProgram extends Program {
  constructor(squares, goat, scoreDisplay, levelDisplay) {
    super(squares, goat);
    this.scoreDisplay = scoreDisplay;
    this.levelDisplay = levelDisplay;
  }

  setCommandCode(c) {
    if (c === "space") {
      if (this.isRunning) return this.pause();
      else return this.resume();
    }

    this.commandCode = c;

    this.goat.setDirection(this.commandCode);
  }

  willMeetLimits() {
    const currentDirection = this.goat.getDirection();
    const currentPosition = this.goat.getPosition();
    if (
      (currentDirection === 1 &&
        currentPosition % this.width === this.width - 1) ||
      (currentDirection === this.width &&
        currentPosition + this.width >= this.width * this.width) ||
      (currentDirection === -1 && currentPosition % this.width === 0) ||
      (currentDirection === -this.width && currentPosition - this.width < 0) ||
      this.squares[currentPosition + currentDirection].getStatus() === "rock" ||
      this.squares[currentPosition + currentDirection].getStatus() === "wolf"
    ) {
      return true;
    }
      
    return false;
  }

  proceedToNextLvl() {
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
  }

  updateSquares() {
    const prevPosition = this.goat.getPosition();
    
    this.squares[prevPosition].setStatus("");

    this.goat.move();
    this.wolf.move();

    const newPosition = this.goat.getPosition();
    if (this.squares[newPosition].getStatus() === "grass") {
      this.score += 1;
      this.scoreDisplay.textContent = this.score;
    }

    this.squares[newPosition].setStatus(this.goat.getName());
  }

  doExecute() {
    if (this.willMeetLimits()) {
      this.pause();
      this.intervalTime = 1000;
      this.score = 0;
      this.level = 1;
      return this.restart();
    }

    if (this.score - this.prevScore === this.area - (this.obstacles.length + 1))
      this.proceedToNextLvl();

    this.updateSquares();
  }
}

export default InteractiveProgram;
