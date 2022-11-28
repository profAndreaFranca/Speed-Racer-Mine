var database;
var form, game, player;
var playerCount = 0, gameState = 0;

var bgimg;


function preload() {
  bgimg = loadImage("./assets/images/background1.png");
}

function setup() {

  canvas = createCanvas(950, 470);

  game = new Game();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }
}


