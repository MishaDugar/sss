var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);
	rectMode(CENTER); 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	packageBody= Bodies.rectangle(width/2,300,width,10,{isStatic:true} );
	World.add(world, packageBody);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 590, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  drawSprites();
 
 }

function keyPressed( DOWN_ARROW) {
 if (keyCode === DOWN_ARROW) {
Matter.	Body.setStatic(packageBody.body,false)
}
}



