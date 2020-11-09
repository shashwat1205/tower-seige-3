
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var ground1;
var base1, base2;
var b1, b2, b3, b4, b5, b6, b7;
var b8, b9, b10, b11, b12;
var b13, b14, b15, b16;

var a1, a2, a3, a4, a5, a6, a7;
var a8, a9, a10, a11, a12;
var a13, a14, a15, a16;

var bg = "bg.png";
var backgroundImg;
var score = 0;

function preload()
{
  polygon_img=loadImage("polygon.png");
  getBackgroundColor();
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
	//Create the Bodies Here.
   //polygon = new Polygon(50, 200, 40, 40);
   ground1 = new Ground(600, 600, 1200, 300);

   base1 = new Ground(480, 350, 320, 30);
   base2 = new Ground(980, 250, 320, 30);

   b1 = new Block(400, 345, 40, 40);
   b2 = new Block(430, 345, 40, 40);
   b3 = new Block(460, 345, 40, 40);
   b4 = new Block(490, 345, 40, 40);
   b5 = new Block(520, 345, 40, 40);
   b6 = new Block(550, 345, 40, 40);
   b7 = new Block(580, 345, 40, 40);

   b8 = new Block(430, 305, 40, 40);
   b9 = new Block(460, 305, 40, 40);
   b10 = new Block(490, 305, 40, 40);
   b11= new Block(520, 305, 40, 40);
   b12 = new Block(550, 305, 40, 40);

   b13 = new Block(460, 265, 40, 40);
   b14 = new Block(490, 265, 40, 40);
   b15 = new Block(520, 265, 40, 40);

   b16 = new Block(490, 225, 40, 40);

   a1 = new Block(900, 245, 40, 40);
   a2 = new Block(930, 245, 40, 40);
   a3 = new Block(960, 245, 40, 40);
   a4 = new Block(990, 245, 40, 40);
   a5 = new Block(1020, 245, 40, 40);
   a6 = new Block(1050, 245, 40, 40);
   a7 = new Block(1080, 245, 40, 40);

   a8 = new Block(930, 205, 40, 40);
   a9 = new Block(960, 205, 40, 40);
   a10 = new Block(990, 205, 40, 40);
   a11 = new Block(1020, 205, 40, 40);
   a12 = new Block(1050, 205, 40, 40);

   a13 = new Block(960, 165, 40, 40);
   a14 = new Block(990, 165, 40, 40);
   a15 = new Block(1020, 165, 40, 40);

   a16 = new Block(990, 125, 40, 40);

	//polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);
  chain = new slingshot(this.polygon, {x:100, y:200});
}


function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
  
  rectMode(CENTER);
  
  Engine.update(engine);
  fill("pink");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  
  
  fill(rgb(52, 204, 255));
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("gold");
  b13.display();
  b14.display();
  b15.display();
  fill("orange");
  b16.display();

  fill(rgb(127, 255, 0));
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();

  fill("pink")
  a8.display();
  a9.display();
  a10.display();
  a11.display();
  a12.display();

  fill(rgb(52, 204, 255));
  a13.display();
  a14.display();
  a15.display();

  fill("gold");
  a16.display();

  drawSprites();
  ground1.display();
 //polygon.display();
 base1.display();
 base2.display();

 imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

 // fill("pink");
 chain.display();
 
 textSize(25);
 stroke(0);
 fill(0);
 text("𝔇𝔯𝔞𝔤 𝔱𝔥𝔢 𝔭𝔬𝔩𝔶𝔤𝔬𝔫 𝔱𝔬 𝔡𝔢𝔰𝔱𝔯𝔬𝔶 𝔱𝔥𝔢 𝔟𝔩𝔬𝔠𝔨𝔰.", 400, 130);
 fill("white");
 text("POINTS: "+score, 500, 530);
 text("𝙿𝚛𝚎𝚜𝚜 𝚜𝚙𝚊𝚌𝚎 𝚝𝚘 𝚐𝚎𝚝 𝚘𝚗𝚎 𝚖𝚘𝚛𝚎 𝚌𝚑𝚊𝚗𝚌𝚎 𝚝𝚘 𝚙𝚕𝚊𝚢.", 300, 560);
 b1.Score();
  b2.Score();
  b3.Score();
  b4.Score();
  b5.Score();
  b6.Score();
  b8.Score();
  b9.Score();
  b10.Score();
  b11.Score();
  b12.Score();
  b13.Score();
  b14.Score();
  b15.Score(); 
  b7.Score(); 
  b16.Score(); 

  a1.Score();
  a2.Score();
  a3.Score();
  a4.Score();
  a5.Score();
  a6.Score();
  a8.Score();
  a9.Score();
  a10.Score();
  a11.Score();
  a12.Score();
  a13.Score();
  a14.Score();
  a15.Score(); 
  a7.Score(); 
  a16.Score(); 
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
  if(keyCode == 32){
      chain.attach(this.polygon);
  }
}

async function getBackgroundColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  if (hour>=06 && hour<=18){
    bg = "bg.png";
  }
  else{
    bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);

}

