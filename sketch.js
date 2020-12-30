//CREATING ALL THE CONSTANTS (CONSTANT HAVE FIXED VALUES).
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var MyEngine,MyWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  //Creating MyEngine And My World .
  MyEngine = Engine.create();
  MyWorld = MyEngine.world;

  //Making is static = true so that the ground would not fall.
  var optional = {
    isStatic: true
  }

  //making the ground and adding it to the world.
  ground = Bodies.rectangle(200,390,400,20,optional);
  World.add(MyWorld,ground);
  //console.log(ground);
  
  //the bounce off .
  var ball1 = {
    restitution: 1.5

  } 

   //making the ball and adding it to the world.
  ball = Bodies.circle(200,100,20,ball1);
  World.add(MyWorld,ball);

}

function draw() {
  background(0);  
  //Updating our engine(IMP).
  Engine.update(MyEngine);

  //making them visible
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
 


}