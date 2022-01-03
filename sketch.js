const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var balloon1;

var obstacle1,obstacle2,obstacle3;

function preload() {
    
}
function setup() {
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;
    obstacle1=createSprite(400,200,40,40);
    obstacle1.velocityY=3;
    obstacle2=createSprite(400,200,80,40);
    obstacle2.velocityY=3;
    obstacle3=createSprite(400,200,80,10);
    obstacle3.velocityY=3;

    balloon1 = new Balloon(250,700,"red")
}
function draw() {
    background(10, 128, 202);
    Engine.update(engine);

    balloon1.display();

    //spawnObstacles();
    handleKeyControls();
    drawSprites();
}
function handleKeyControls() {
    if (keyDown(37)){
        balloon1.x -= 5;
    }
    if (keyDown(39)) {
        balloon1.x += 5;
    }
    if (keyDown(40)){
        balloon1.y -= 5;
    }
    if (keyDown(38)) {
        balloon1.y += 5;
    }
}
function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(Math.round(random(1,500)),200,40,40);
      obstacle.velocityY = -6;
      
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(obstacle1);
                 break;
         case 2: obstacle.addImage(obstacle2);
                 break;
         default: break;
       }
      
       obstacle.lifetime = 400;
      
       obstaclesGroup.add(obstacle);
    }
   }