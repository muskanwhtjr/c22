const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var con;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	var roof_options={
		isStatic:true			
	}
var ball_options={
	isStatic:true,
	restitution:0.2,
}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
ball1=Bodies.circle(300,400,10,ball_options);
World.add(world,ball1)
ball2=Bodies.circle(350,400,10,ball_options);
World.add(world,ball2)
ball3=Bodies.circle(400,400,10,ball_options);
World.add(world,ball3)
ball4=Bodies.circle(450,400,10,ball_options);
World.add(world,ball4)
ball5=Bodies.circle(500,400,10,ball_options);
World.add(world,ball5)
	Engine.run(engine);
	

  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
 //create ellipse shape for multiple bobs here
  rect(roof.position.x,roof.position.y,250,20);
ellipse(ball1.position.x,ball1.position.y,50,50);
ellipse(ball2.position.x,ball2.position.y,50,50);
ellipse(ball3.position.x,ball3.position.y,50,50);
ellipse(ball4.position.x,ball4.position.y,50,50);
ellipse(ball5.position.x,ball5.position.y,50,50);
  //call display() to show ropes here
  display();
 
  

 

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
