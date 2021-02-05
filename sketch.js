var fairyImage;
var backGroundImg ;
var fairy ;

var star;
var starImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var starBody;

function preload()
{
   //preload the images here
   fairyImage = loadAnimation("images/fairy1.png","images/fairy2.png");
   backGroundImg = loadImage("images/starnight.png");
   starImage = loadImage("images/star.png");
}

function setup() {
  createCanvas(800, 750);

  engine = Engine.create();
  world = engine.world;
 
  fairy = createSprite(140,500,50,50)
  fairy.addAnimation("movingFairy",fairyImage);
 fairy.scale = 0.3;
 
  
  var star_options ={
    isStatic :true
  }
  starBody = Bodies.rectangle(500,50,50,50,star_options);
  starBody.image = starImage;
  World.add(world,starBody);
  
  

}


function draw() {
  background(backGroundImg);
 Engine.update(engine);
 
 if(keyDown("left")){
   fairy.x = fairy.x -5;
 }
 if(keyDown("right")){
   fairy.x = fairy.x +5;
 }
 if(keyDown("down")){
  Matter.Body.setStatic(starBody,false);
 }
 //rectMode(CENTER);

 //rect(fairy.position.x,fairy.position.y,100,50);

 imageMode(CENTER);

// rect(starBody.position.x,starBody.position.y,50,50);
 image(starImage,starBody.position.x,starBody.position.y,40,40);

 if(starBody.position.y > 470){
   Matter.Body.setStatic(starBody,true);
 }


 
 
 drawSprites();
}
