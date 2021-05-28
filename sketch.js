const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup()
{
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    hammer = new Hammer(10,100);

    rubber = new Rubber(900,450,70);

    iron = new Iron(400,20,100,50);

    stone = new Stone(200,20,80,30);

}

function draw()
{
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber.display();    
 
}