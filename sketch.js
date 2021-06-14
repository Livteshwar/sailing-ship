var sea 
var ship
var seaImg
var shipImg
function preload(){
  seaImg = loadImage("sea.png")
  shipImg = loadAnimation("ship1.png,ship2.png,ship3.png,ship4.png")

}

function setup(){
  createCanvas(600,200);
  sea = createSprite(200,100,)
  ship = createSprite(100,100,20,50)
  sea.addImage(seaImg)
  ship.addAnimation("sailing",shipImg)
  sea.velocityX=-5
}

function draw() {
  background("blue");
 if (sea.x<0){
   sea.x=sea.width/2
 }
}