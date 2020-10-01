var select
var score = 0; 
var start = 1;
 var end = 0;
 var gamestate = start;
var restart,rex,ground,cactus2,cloud2;
var cloud3, gameover1,ground3,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,restart1,trex3,trex4;
function preload(){
  trex3=loadAnimation("trex1.png","trex3.png","trex4.png")
  trex4=loadAnimation("trex_collided.png")
  cloud3=loadImage("cloud.png")
  ground3=loadImage("ground2.png")
  obstacle1=loadImage("obstacle1.png")
    obstacle2=loadImage("obstacle2.png")
    obstacle3=loadImage("obstacle3.png")
    obstacle4=loadImage("obstacle4.png")
    gameover1=loadImage("gameOver.png")
    restart1=loadImage("restart.png")
  
}
function setup () {
  createCanvas(windowWidth,windowHeight)
restart = createSprite(298,289,20,20);
restart.addImage(restart1);
restart.visible=false;
 rex = createSprite(100,376,20,20);
 ground = createSprite(0,380,20,20);
ground.addImage(ground3);

rex.addAnimation("trex",trex3);
  rex.addAnimation("trex10",trex4)
rex.scale= (0.5);
   cactus2 = createGroup();
 cloud2 = createGroup();
}






function draw() {
  background("white");  
  drawSprites();
  createEdgeSprites();
    textSize(20);
  text("score:"+ score,60,50);

  
  if (gamestate==start){
 score=score+Math.round(getFrameRate()/60);
    ground.velocityX=-(6+score/100);
    
   if (ground.x<0){
    ground.x=600;
  }
 if (touches.length>0||keyDown("up")&&rex.y>340){
    rex.velocityY= - 14;
    ground.velocityX=7;
    touches=[]
  }
  rex.velocityY=rex.velocityY+1;                    
  
  
  rex.collide(ground) ;
    cloud();

  cactus();
  if (rex.isTouching(cactus2)){
    gamestate=end;
    rex.changeAnimation("trex10",trex4);
  

//playSound("sound://category_hits/retro_game_weapon_-_light_punch_2.mp3");
      
 
    
  }
    
  }
  
  if (score%100==0&&score>0){
    //playSound("sound://category_achievements/lighthearted_bonus_objective_5.mp3");
  }

  
  
  else if (gamestate==end){
    ground.velocityX=0;
    rex.velocityY=0;
    rex.velocityX=0;
  cactus2.setVelocityXEach(0);
    cloud2.setVelocityXEach(0);
    restart.visible=true;
    //score=0;
    
    textSize(50);
    text("GAME OVER",70,200);
    
    if (touches.length>0||mousePressedOver(restart)){
   gamestate=start;
   restart.visible=false;
   score=0;
   rex.changeAnimation("trex",trex3);
      touches=[]
 }
    
  }
}


function cloud(){
if (frameCount%100==0){
  

var cloud1 =  createSprite(508,Math.round(random(30,200)),20,20) ;
cloud1.addImage(cloud3);
cloud1.velocityX=-4;
cloud2.add(cloud1);
cloud1.lifetime=150;
  
}

}

function cactus(){
  if (frameCount%60==0){
 var cactus1 = createSprite(500,370,20,20);  
  cactus1.velocityX=-(6+score/100);
 select = Math.round(random(1,4));
switch(select){
  case 1:cactus1.addImage(obstacle1) 
    break;
   case 2:cactus1.addImage(obstacle2) 
    break;
     case 3:cactus1.addImage(obstacle3) 
    break;
     case 4:cactus1.addImage(obstacle4) 
    break;
    default:break;
}
    cactus1.scale=(0.5);
  cactus1.depth=rex.depth;
  rex.depth=rex.depth+1;
cactus2.add(cactus1);
cactus1.lifetime=150;
    
    
  } 
}
















