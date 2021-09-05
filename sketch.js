
var ship, shipImg;
var sea, seaImg;

function preload(){
  shipImg = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImg = loadImage("sea.png")
  
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 50, 50);
  sea.addAnimation("sea", seaImg)
  sea.scale = 0.25
  sea.velocityX = -3
  ship = createSprite(100, 150, 100, 100);
  ship.addAnimation("bobbing", shipImg)
  ship.scale = 0.25
  

}

function draw() {
  background("blue");

if (sea.x < 0)
{
  sea.x = sea.width/2
}

  drawSprites();
}