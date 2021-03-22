const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1 = new Box();

   // object = Bodies.rectangle(200,100,20, 20);
    //World.add(world,object);

    //console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   //rect(object.position.x,object.position.y,40,40);

   box1.display();

 
}