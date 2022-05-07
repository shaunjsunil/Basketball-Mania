var bg
var pli
var player
var b,g,chain
var o = 0
var l,logo
var point;
var tsbt;
var gameState = 1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.constraint;
var engine,world
var h1,h2,h3,h4,h5,h6;
var p1,p2,p3,p4,p5,p6;
var count=10;
var bimg,button;
function preload(){
bg = loadImage("court.jpg")
pli = loadImage("player.png")
l = loadImage("logo.png")
bimg = loadImage("button.png")
}


function setup(){
createCanvas(1535,735)
engine = Engine.create()
world = engine.world;

b = new Ball(257,571,100,80);
g = new Ground(750,700,1580,20);
chain=new Rope(b.body,{x:257,y:571})
h1 = new Hoop(1390,130)
h2 = new Hoop(1390,330)
h3 = new Hoop(1390,530)
h4 = new Hoop(1090,330)
h5 = new Hoop(1090,530)
h6 = new Hoop(790,530)
p1 = new Particle(815,508)
p2 = new Particle(1112,508)
p3 = new Particle(1112,308)
p4 = new Particle(1412,308)
p5 = new Particle(1412,508)
p6 = new Particle(1412,108)
point=0
player = createSprite(220,570,50,50)
player.addImage(pli)
player.scale=.3

logo = createSprite(90,46,50,50)
logo.addImage(l)
logo.scale=0.1




}


function draw(){

Engine.update(engine)

if(gameState===1){
background(bg)
player.visible = true;
logo.visible = true;
drawSprites()
push()
stroke(7)
strokeWeight(7)
fill("white")
textSize(25);
text("NUMBER OF THROWS LEFT :  "+count,294,36)
pop()

push()
stroke(7)
strokeWeight(7)
fill("white")
textSize(25);
text("POINTS SCORED :  "+point,794,36)
pop()

chain.display();
b.display();
h1.display();
h2.display();
h3.display();
h4.display();
h5.display();
h6.display();
detectollision(b,p1);
detectollision(b,p2);
detectollision(b,p3);
detectollision(b,p4);
detectollision(b,p5);
detectollision(b,p6);


}
if(count===0 && frameCount%500===1){
  gameState=2
}
if(gameState===2){

  background("black")
player.visible = false;
logo.visible = false;
stroke(1)
strokeWeight(1)
fill("white")
textSize(60);
text("GAME OVER",600,200)
text("POINTS SCORED :  "+point,500,300)
text("PRESS 'R' TO REPLAY",450,400)

drawSprites()

}
}
function mouseDragged(){
    if(o===0 && count>=1){
    Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY});
    }
  }
function mouseReleased(){
  if(count>=1){
   chain.fly();
   o=1
   count-=1
  }
}
function keyPressed(){
  if(keyCode === 32 && count>=1){
  chain.attach(b.body)
  o=0 
}
if(keyCode === 82 && gameState===2){
  reset()
  
    }
}
function detectollision(ball,hoopno){

  ballBodyPosition=ball.body.position
  hoopBodyPosition=hoopno.body.position
  
  var distance=dist(ballBodyPosition.x, ballBodyPosition.y, hoopBodyPosition.x, hoopBodyPosition.y)
  	if(distance<=hoopno.r+ball.r)
    {
  	  point=point+1;
    }

  }
function reset(){
gameState=1
count=10
point=0
}