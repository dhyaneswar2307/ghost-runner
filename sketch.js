var tower,towerImage;
var door,doorImage,doorsGroup;
var climber,climberImage,climbersGroup;
var ghost,ghostImage;
var invisibleBlock,invisibleBlockGroup;
var gameState="play"




function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("ghost-standing.png");
  spookySound=loadSound("spooky.wav");

  
}



function setup(){
  createCanvas(600,600);
//spookySound.loop();
  tower=createSprite(300,300);
  tower.addImage("tower",towerImage);
 tower.velocityY=1.2;
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup=new Group();
  ghost=createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImage);
  ghost.scale=0.3;
  ghost.velocityY=-1;
}


  



function draw(){
  
  background(0);
 if (gameState==="play"){
   
 
  if(tower.y>400){
    tower.y=300;
  
  }
  if(keyDown("space")){
    ghost.velocityY=-5;
    
  }    
   ghost.velocityY=ghost.velocityY+0.8;
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
}
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
}
  
    
  spawnDoors();
  if(climbersGroup.isTouching(ghost)){ ghost.velocityY = 0;
}
  
  if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){ ghost.destroy(); gameState = "end" }

  drawSprites();
  
  
  
  
}
if (gameState === "end")
{ 
  stroke("yellow"); 
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250) }


function spawnDoors(){
  if(frameCount%240===0){
     door=createSprite(200,-50);
    door.velocityY=1;
    door.x=Math.round(random(120,400));
    door.liftime=800;
  door.addImage(doorImage);
    doorsGroup.add(door);
    
    climber=createSprite(200,10);
    climber.addImage(climberImage);
    climber.velocityY=2;
    
    
    climber.lifetime=800;
    climbersGroup.add(climber);
    climber.x=door.x;
     ghost.depth=door.depth
    ghost.depth +=1
    invisibleBlock=createSprite(200,50 );
    invisibleBlock.width=climber.width;
    invisibleBlock.x=door.x;
    invisibleBlock.lifetime=800;
    invisibleBlock.velocityY=1;
    invisibleBlockGroup.add(invisibleBlock);
    invisibleBlock.debug=true;

}
}
}