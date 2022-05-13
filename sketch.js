
var trex, trex_running,ground,groundImage,cloudImage;
var invisibleground;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
groundImage=loadImage("ground2.png")
cloudImage=loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200)

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50)
  trex.addAnimation("running", trex_running)
  //to create edges
  edges = createEdgeSprites()
  //to add scale and position to trex
  trex.scale=0.5;
  //create ground sprite
  ground=createSprite(200,180,400,20)
  ground.addImage("ground",groundImage)
  ground.x=ground.width/2
  ground.velocityX=-4
  //to create a invisible ground
  invisibleground=createSprite(200,190,400,10)
  invisibleground.visible=false

 // var ran=Math.round(random(10,60))
 // console.log(ran)
}

function draw() {
  //set background colour to white
  background("white")
  console.log(trex.y)
  //jump when space key is pressed
  if (keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5
  //to make the ground appear again
  if(ground.x<0){
    ground.x=ground.width/2
  }
  //to stop trex from falling down
  trex.collide(invisibleground)
  //call the spawn clouds
  spawnclouds()
  console.log(frameCount)
  drawSprites()
}

function spawnclouds(){
  //to spawn clouds at different locations
  if(frameCount%60===0){
  cloud=createSprite(600,100,40,10)
  cloud.addImage(cloudImage)
  cloud.y=Math.round(random(10,60))
  cloud.scale=0.4
  cloud.velocityX=-3

  //adjust the depth
  cloud.depth=trex.depth

  trex.depth=trex.depth+1
  }
}