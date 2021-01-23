const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var helicopter,helicopterImg;
var a,b,c;
var package;
var packageImg;

function preload(){
	helicopterImg=loadAnimation("helicopter.png")
    packageImg=loadAnimation("package.png");
}

function setup(){
	createCanvas(1000,720)
	engine=Engine.create();
	world=engine.world
	helicopter=createSprite(300,200,100,100);
	helicopter.addAnimation("standing",helicopterImg)
	helicopter.scale=0.5;
	
	
	//package.visible=false;


	
	a=new Ground (250,650,10,100)
	b=new Ground(350,700,200,10)
	
	c= new Ground(450,650,10,100)
}




function draw(){
	background("black");
Engine.update(engine)
	drawSprites();

	keyPressed();

	a.display()
	b.display()
		c.display()
displayPack()


}

function keyPressed(){
	if(keyDown("LEFT_ARROW")){
		helicopter.x=helicopter.x-2;
	}
	if(keyDown("RIGHT_ARROW")){
		helicopter.x=helicopter.x+2;
	}
	
}
function displayPack(){
	if(keyDown("DOWN_ARROW")){
		package=new Box(helicopter.x,300,50,50)
		
	package.display()
	}
	
}