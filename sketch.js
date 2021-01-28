
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5, roofObject;
var rope1,rope2,rope3, rope4, rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roofObject=new roof(350,100,300,30);
  //World.add(world, roofObject);

bob1= new bob(250, 250);
bob2= new bob(300, 250);
bob3= new bob(350, 250);
bob4= new bob(400, 250);
bob5= new bob(450, 250);

//create 3 more bobs with x position 350, 400 and 450 & y position same for all as 300



rope1= new rope(bob1.body, roofObject.body, -100, 0);

rope2= new rope(bob2.body, roofObject.body, -50,0);

rope3= new rope(bob3.body,roofObject.body,0,0);

rope4= new rope(bob4.body,roofObject.body,50,0);

rope5= new rope(bob5.body,roofObject.body,100,0);

//create 3 more constraints between rope and bobs, xofset and yoffset will be 0,0 for rope3 & 50,0 for rope 4 & 100, 0 for rope5





Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  roofObject.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0});

	}
}


