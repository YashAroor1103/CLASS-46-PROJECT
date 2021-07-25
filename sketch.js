var gameState = 0;
var playButton;
var backGroundImage;
var ball;
var ballImage;
var player;
var playerImage;
var opponent;
var opponentImage;
var playerScore = 0;
var opponentScore = 0;
var edges;
var score = 0;

function preload(){
  backGroundImage = loadImage("bg2.png");
  ballImage = loadImage("ball.png");
  playerImage = loadImage("boy.png");
  opponentImage = loadImage("girl.png");
}

function setup() {
  createCanvas(displayWidth , displayHeight);

  ball = createSprite(displayWidth/2 , displayHeight/2 , 20 , 20);
  ball.addImage("ballImage",ballImage);
  ball.scale = 0.2;

  player = createSprite(displayWidth/2, displayWidth/2.5 , 20 , 20);
  player.addImage("playerImage",playerImage);
  player.scale = 2;

  opponent = createSprite(displayWidth/2 , displayHeight/6 , 20 , 20);
  opponent.addImage("opponentImage",opponentImage);
  opponent.scale = 2;

 

  edges = createEdgeSprites();

  playButton = new Button();


}

function draw() {
  background("red");  
  if(gameState === 0){
    playButton.display();
    fill("black");
    textSize(40);
    text("1 V 1 FOOTBALL GAME", 600 , 55);

    

    fill("yellow");
    textSize(25);
    text("> THE RULES OF THE GAME ARE GIVEN BELOW",100,120);
    text("> THIS GAME CONSISTS OF TWO PLAYER",100,150);
    text("> PLAYER TO YOUR LEFT IS YOU (I.E. THE PLAYER)",100,180);
    text("> THE PLAYER TO YOUR RIGHT IS YOUR OPPONENT",100,210);
    text("> YOU CAN MOVE THE BOY WITH THE HELP OF THE LEFT AND RIGHT ARROW KEYS",100,240);
    text("> THE PLAYER TO SCORE THE FIRST 5 GOALS WINS !!!!",100,270);
  }

  if(gameState === 1){
    background(backGroundImage);
  

    textSize(25);
    fill("white");
    text("Score :"+ score,50,50);
    text("Score :" + score, 50, 100);

    fill("black");
    textSize(15);
    text("PRESS THE UP ARROW KEY TO START THE GAME",200,200);
    

    if(keyIsDown(RIGHT_ARROW)){
      player.velocityX = 6;
    }

    if(keyIsDown(LEFT_ARROW)){
      player.velocityX = -6;
    }

    if(keyIsDown(UP_ARROW)){
      ball.velocityX = 3;
      ball.velocityY = 4;
    }
    ball.bounceOff(player);
    ball.bounceOff(opponent);

    
    drawSprites();
  }
}