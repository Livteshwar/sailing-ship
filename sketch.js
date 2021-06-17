var sea 
var ship
var seaImg
var shipImg
function preload(){
  seaImg = loadImage("sea.png")
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200)
  ship = createSprite(100,200,20,50)
  sea.addImage(seaImg)
  ship.addAnimation("sailing",shipImg)
  sea.velocityX=-5
  ship.scale=0.2
  sea.scale=0.3
}

function draw() {

  background("blue");
 if (sea.x<0){
   sea.x=sea.width/8
 }
 drawSprites()
}
