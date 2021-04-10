//creating variables
var garden,gardenImg;

var Tom;
var Tomsit,Tomhappy,Tomwalk;

var Jerry;
var Jerrystand,Jerrytease,Jerryhappy;

var Play=1;
var End=0;
var Gamestate=Play;

function preload() {
    //load the images here

    //loading garden's image
    gardenImg=loadImage("images/garden.png");

    //loading tom's images and animation
    Tomsit=loadImage("images/cat1.png");
    Tomwalk=loadAnimation("images/cat2.png","images/cat3.png");
    Tomhappy=loadImage("images/cat4.png");

    //loading jerry's images and animation
    Jerrystand=loadImage("images/mouse4.png");
    Jerryhappy=loadImage("images/mouse1.png");
    Jerrytease=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom,jerry and garden sprites here
    garden=createSprite(500,400,20,20); 
    garden.addImage(gardenImg);
    garden.scale=1.5;

    Tom=createSprite(900,700,20,20);
    Tom.addImage(Tomsit);
    Tom.scale=0.15;
    //Tom.debug=true;
    Tom.setCollider("circle",-200,10,200);
    
    Jerry=createSprite(300,700,20,20);
    Jerry.addImage(Jerrystand);
    Jerry.scale=0.10;
}

function draw() {

    background("green");
    //Write condition here to evalute if tom and jerry collide

    //writing if condition to make tom and jerry collide
    if(Jerry.x-Tom.x>Jerry.width/2-Tom.width/2){
        Tom.addAnimation("Happycat",Tomhappy);
        Tom.changeAnimation("Happycat",Tomhappy);
        Tom.velocityX=0;

        Jerry.addAnimation("Happyrat",Jerryhappy);
        Jerry.changeAnimation("Happyrat",Jerryhappy);
    }
    keyPressed();
    drawSprites();
       
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode==LEFT_ARROW){
   Jerry.addAnimation("Teasing",Jerrytease);
   Jerry.changeAnimation("Teasing");
   Jerry.frameDelay=25;
   Tom.addAnimation("walking",Tomwalk);
   Tom.changeAnimation("walking");
   Tom.velocityX=-3;
  } 

}
