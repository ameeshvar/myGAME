var player1,player1IMG,player2,player2IMG,obstacles,obstaclesIMG,bullet,bulletIMG,backgroundS,

function preload() {

  player1=loadImage("images/player1.png")
  player2=loadImage("images/player2.png")
  obstacles=loadImage("images/obstacle.png")
  bullet=loadImage("images/bullet.png")
  sound1=loadSound("sounds/background.wav")
  sound2=loadSound("sounds/explotion.mp3")
  sound3=loadSound("sounds/final round.mp3")
  sound4=loadSound("sounds/game over.mp3")

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

}

function draw() {
  
}