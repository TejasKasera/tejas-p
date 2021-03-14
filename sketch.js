var log;
var ball1;
var ball2;
var ball3;
var ball4;
var ground;
var slingShot1st;
var slingShot2nd;
var slingShot3rd;
var slingShot4th;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function setup() {
	createCanvas(800,650);


	engine = Engine.create();
	world = engine.world;

	log = new Log(405,350,230,20);
	
  ball1 = new Ball (350,400,25)

	ball2 = new Ball(400,400,25)

	ball3 = new Ball(450,400,25)

	ball4 = new Ball(500,400,25)

	ground = new Ground(width/2, 630, width,20)

  strokeWeight(4);
	slingShot1st = new Slingshot1(ball1.body,{x:320,y:350})

  slingShot2nd = new Slingshot1(ball2.body,{x:370,y:350})

  slingShot3rd = new Slingshot1(ball3.body,{x:430,y:350})

  slingShot4th = new Slingshot1(ball4.body,{x:490,y:350})
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  slingShot1st.display();
  slingShot2nd.display();
  slingShot3rd.display();
  slingShot4th.display();
  log.display();
  ground.display();
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
    Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY});
    Matter.Body.setPosition(ball3.body,{x:mouseX,y:mouseY});
    Matter.Body.setPosition(ball4.body,{x:mouseX,y:mouseY});
   
    
}

