import config from "./config.js";
import Grid from "./components/grid.js";
import Goat from "./components/goat.js";
import Controller from "./components/controller.js";
import Square from "./components/square.js";
import DemoProgram from "./program/demoProgram.js";
import BotProgram from "./program/botProgram.js";
import InteractiveProgram from "./program/interactiveProgram.js";

let squares = [];
const playBtn = document.querySelector(".userMode");
const watchBotBtn = document.querySelector(".botMode");
const scoreDisplay = document.querySelector(".score");
const levelDisplay = document.querySelector(".currentLevel");
const width = config.width;
const directions = config.directions; // [1, -1, 10, -10]
let userMode = false;
let botMode = false;

const commands = {
  ArrowRight: { code: "ArrowRight", value: directions[0] },
  ArrowLeft: { code: "ArrowLeft", value: directions[1] },
  ArrowUp: { code: "ArrowUp", value: directions[3] },
  ArrowDown: { code: "ArrowDown", value: directions[2] },
  Space: { code: "Space", value: "space" },
};

for (let i = 0; i < config.area; i++) squares[i] = new Square(i);

const goat = new Goat(0, 1);
const grid = new Grid(width, squares);
const demoProgram = new DemoProgram(squares, goat);
const interactiveProgram = new InteractiveProgram(
  squares,
  goat,
  scoreDisplay,
  levelDisplay
);
const botProgram = new BotProgram(squares, goat, scoreDisplay, levelDisplay);

const controller = new Controller(commands, (c) =>
  interactiveProgram.setCommandCode(c)
);

playBtn.addEventListener("click", () => {
  userMode = true;

  if (demoProgram.isRunning) demoProgram.exit();
  if (interactiveProgram.isRunning) interactiveProgram.exit();
  if (botProgram.isRunning) botProgram.exit();

  controller.activate();

  interactiveProgram.init();
  interactiveProgram.execute();
});

watchBotBtn.addEventListener("click", () => {
  userMode = false;
  botMode = true;
  if (demoProgram.isRunning) demoProgram.exit();
  if (interactiveProgram.isRunning) interactiveProgram.exit();
  if (botProgram.isRunning) botProgram.exit();

  botProgram.init();
  botProgram.execute();
})

if (!userMode && !botMode) {
  grid.render();
  demoProgram.init();
  demoProgram.execute();
}
