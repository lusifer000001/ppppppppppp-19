var rocket , rocketImg ;
var bomb , bombImg ;
var bomb2 , bomb2Img ;
var star , starImg ;
var bg , bgImg ;

var treasureCollection = 0;

var PLAY = 1 ;
var END = 0 ;
var gameState = 1 ;

function preload(){

bgImg = loadImage("bk.png") ;
bomb = loadImage("bomb1.png")  ;
bomb2Img = loadImage("bomb2.png") ;
rocketImg = loadImage("rocket.png") ;
starImg = loadImage("star.png") ;

}

function setup() {
    createCanvas(windowWidth , windowHeight ) ;
bg = createSprite(width/2,200) ;
bg.addImage(bgImg) ;
bg.velocityY = 4 ;
bg.scale =4 ;

rocket = createSprite(width/2,height-20,30,30) ;
rocket.addImage(rocketImg) ;
rocket.scale = 0.4 ;

bomb1G = new Group() ;
bomb2G = new Group() ;
starG = new Group() ;
 
edges= createEdgeSprites();

}

function draw() {

 
    if(gameState===PLAY){
        background(0);
        rocket.x = World.mouseX;
        
     
        rocket.collide(edges);
        
        //code to reset the background
        if(bg.y > height ){
          bg.y = height/2;
      
        }
        
      createBomb1() ;
      createBomb2() ;
      createStar() ;
     
      
          if (starG.isTouching(rocket)) {
            starG.destroyEach();
            treasureCollection=treasureCollection+100;
          }
            if(bomb1G.isTouching(rocket)) {
              gameState  = END ;
            
          
            }}
        else if(gameState===END){
          rocket = addImage(rocketImg) ;
          rocket.scale = 0.5 ;
          rocket.x = 200 ;
          rocket.y = 300 ;
          starG.destroyEach() ;
        }
    
        drawSprites();
        textSize(20);
        fill(255);
        text("Treasure: "+ treasureCollection,150,30);
    
      
        }
      


function createStar() {
    if (World.frameCount % 60 == 0) {
        var star = createSprite(Math.round(random(50, 350),40, 10, 10));
        star.addImage(starImg);
        star.scale=0.12;
        star.velocityY = 3;
        star.lifetime = 150;
        starG.add(star);
        }
}

function  createBomb1() {
    if (World.frameCount % 80 == 0) {
        var bomb = createSprite(Math.round(random(50, 350),40, 10, 10));
        bomb.addImage(bombImg);
        bomb.scale=0.12;
        bomb.velocityY = 3;
        bomb.lifetime = 150;
        bomb1G.add(bomb);
        }
}

function createBomb2() {
    if (World.frameCount % 80 == 0) {
        var bomb2 = createSprite(Math.round(random(50, 350),40, 10, 10));
        bomb2.addImage(bomb2Img);
        bomb2.scale=0.12;
        bomb2.velocityY = 3;
        bomb2.lifetime = 150;
        bomb2G.add(bomb2);
        }
}