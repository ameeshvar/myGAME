

var player1,player1IMG,player2,player2IMG,obstacles,obstaclesIMG,bgIMG,bullet,bulletIMG,backgroundS,explotionS,playerArray,database,game,form
,player,finalroundS,gameoverS,youwinS,youloseS,bg,lifetimeIMG,lifetime2IMG,allPlayers
var gameState=0
var playerCount=0
function preload() {

  player1IMG=loadImage("images/player1.png")
  player2IMG=loadImage("images/player2.png")
  obstaclesIMG=loadImage("images/obstacle.png")
  bullet=loadImage("images/bullet.png")
  backgroundS=loadSound("sounds/background.wav")
  explotionS=loadSound("sounds/explotion.mp3")
  finalroundS=loadSound("sounds/final round.mp3")
  gameoverS=loadSound("sounds/game over.mp3")
  youwinS=loadSound("sounds/you win.mp3")
  youloseS=loadSound("sounds/you lose.mp3")
  bgIMG=loadImage("images/bg.png")
  lifetimeIMG=loadImage("images/heart1.png")
  lifetime2IMG=loadImage("images/heart2.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database=firebase.database()
  game= new Game()
  game.getGameState()
  game.start()
  game.play
  backgroundS.play()
 
}

function draw() {
  
 
  if(playerCount==2 ){
    game.updateGameState(1)

    
  }
  if(gameState==1){
game.play()

}  
  

text(mouseX+","+mouseY,mouseX,mouseY);
}
function spawnObstacles() {
if(frameCount % 10==0){
  obstacles=createSprite(displayWidth/2-15,displayHeight/2)
  obstacles.addImage("obstaclesIMG",obstaclesIMG)
  obstacles.velocityY=+1
  obstacles.lifetime=100
  obstacles.scale=0.25
  obstacles.x=random(displayWidth/2-500,displayWidth/2)

}
  }