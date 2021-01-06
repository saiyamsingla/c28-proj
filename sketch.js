
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState="serve";

function preload()
{

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
  world = engine.world;
  
  groundSprite=createSprite(width/2, height-42, width,10);
	groundSprite.shapeColor= "brown";
	
	
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	World.add(world, ground);


	tree1= new Tree(700,20,500,500);

	mango1= new Mangoes(1000,200,50);
	mango2= new Mangoes(1100,219,50);
	mango3= new Mangoes(900,200,50);
	mango4= new Mangoes(850,80,50);
	mango5= new Mangoes(970,150,50);

	stone= new Stone(200,340,40);

	boy =new Boy(170,285,200,200);

	sling=new SlingShot(stone.body,{x:250,y:350})
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);

 
  
  tree1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();

  stone.display();

  sling.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  

  drawSprites();
 text("Press Space To Get A Second Chance",50,50)
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    
    sling.fly();
}

function detectCollision(object1,object2){
mangoBodyPosition=object1.body.position;
stoneBodyPosition=object2.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=object1.r+object2.r){
Matter.Body.setStatic(object1.body,false);
}
}

function keyPressed(){
  if(keyCode===32){
      sling.attach(stone.body);
  
        }
  }





