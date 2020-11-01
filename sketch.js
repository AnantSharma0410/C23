var helicopterIMG, helicopterSprite, packageSprite, packageIMG, box1, box2, box3;
var packageBody,ground
var numberoftimeboxbounce;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	box1=createSprite(300,585,20,150);
	box2=createSprite(400,650,200,20);
	box3=createSprite(500,585,20,150);

	box1.shapeColor=color("red");
	box2.shapeColor=color("red");
	box3.shapeColor=color("red");
	numberoftimeboxbounce = 0;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(0);
	
	if(packageSprite.isTouching(groundSprite)){
		numberoftimeboxbounce = numberoftimeboxbounce + 1
  }
  stopbox();

	packageSprite.x= packageBody.position.x  
	packageSprite.y= packageBody.position.y 
  
	drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {Matter.Body.setStatic(packageBody, false);}
}

function stopbox(){
  if(numberoftimeboxbounce>=2){
    Matter.Body.setStatic(packageBody, true);
  }
}