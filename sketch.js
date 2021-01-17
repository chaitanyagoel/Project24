
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
   engine = Engine.create();
	world = engine.world;
   ground = new Ground(600,height,1200,30);
	

 //level 1
paper=new Paper(150,355,20)
dustbin = new Dustbin(900,320,15,110);
dustbin1 = new Dustbin(700,320,15,110);
dustbin3 = new Dustbin(800,380,190,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);

 background(0);
 
 
paper.display();
ground.display();
   
dustbin.display();
dustbin1.display();
dustbin3.display();


}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
}

}
