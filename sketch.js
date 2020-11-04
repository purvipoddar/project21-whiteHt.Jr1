var wall,thickness;
var bullet,speed,weight,bulletImage;

function preload(){
bulletImage = loadImage("bullet.png")
}

function setup() {
  createCanvas(800,400);
   wall = createSprite(700, 200, thickness,700);
   wall.shapeColor = "yellow";

   thickness = random(30,83);
   speed = random(80,350);
   weight = random(30,52);

   bullet = createSprite(50,200,50,50);
   bullet.addImage("Image",bulletImage);
   bullet.scale = 0.4;
   bullet.velocityX = 0;
   
}

function draw() {
  background(0);

if(keyDown("space")){
bullet.velocityX = speed;
}
  if(hascollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor = "red";
  wall.width = 20;
}
if(damage<10){
  wall.shapeColor = "green";
  wall.width = thickness;
}
  }
  drawSprites();
}
function hascollided(object1,object2){
bulletRightEdge = object1.x + object1.width;
wallLeftEdge = object2.x;
if(bulletRightEdge >= wallLeftEdge){
  return true;
}
return false;
bullect.velocityX = 0;
}