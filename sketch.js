
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var holder;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	holder = new holder(700,800,600,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(black);
  
  holder.display();
 
}



