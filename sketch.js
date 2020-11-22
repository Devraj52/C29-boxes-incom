const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;
// to create two bases.
    ground1=new Base(380,430,245,15);
    ground2=new Base(800,300,180,10);
// to create boxes.
// to first lvl.
    box1= new Box(275,403,30,40);
    box2= new Box(304,403,30,40);
    box3= new Box(334,403,30,40);
    box4= new Box(364,403,30,40);
    box5= new Box(394,403,30,40);
    box6= new Box(424,403,30,40);
    box7= new Box(454,403,30,40);
    box8= new Box(484,403,30,40);
    //box9= new Box(500,403,20,40);
    // second lvl.
    box9= new Box(320,363,30,40);
    box10= new Box(350,363,30,40);
    box11= new Box(380,363,30,40);
    box12= new Box(410,363,30,40);
    box13= new Box(440,363,30,40);
    // third lvl.
    box14= new Box(360,323,30,40);
    box15= new Box(390,323,30,40);
    // las lvl. or top lvl.
    box16= new Box(375,283,30,40);

// Right boxes.
    //fst lvl.
    boxr1=new Rbox(725,277,25,35);
    boxr2=new Rbox(750,277,25,35);
    boxr3=new Rbox(775,277,25,35);
    boxr4=new Rbox(800,277,25,35);
    boxr5=new Rbox(825,277,25,35);
    boxr6=new Rbox(850,277,25,35);
    boxr7=new Rbox(875,277,25,35);
    //second lvl.
    boxr8=new Rbox(750,242,25,35);
    boxr9=new Rbox(775,242,25,35);
    boxr10=new Rbox(800,242,25,35);
    boxr11=new Rbox(825,242,25,35);
    boxr12=new Rbox(850,242,25,35);
    //third lvl.
    boxr13=new Rbox(775,207,25,35);
    boxr14=new Rbox(800,207,25,35);
    boxr15=new Rbox(825,207,25,35);
    //last lvl or top lvl.
    boxr16=new Rbox(800,172,25,35);
// to strike the blocks.
    polygon= new Polygon(50,200,30);
    hanger=new Hanger(polygon.body,{x:20,y:20})

}

function draw() {
  background(255,255,5);  
  ground1.display();
  ground2.display();
//left boxes.
  //first lvl.  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  // second lvl
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  //third lvl.
  box14.display();
  box15.display();
  //top lvl.
  box16.display();

// Right boxes.
  //first lvl.
  boxr1.display();
  boxr2.display();
  boxr3.display();
  boxr4.display();
  boxr5.display();
  boxr6.display();
  boxr7.display();
  //second lvl.
  boxr8.display();
  boxr9.display();
  boxr10.display();
  boxr11.display();
  boxr12.display();
  //third lvl.
  boxr13.display();
  boxr14.display();
  boxr15.display();
  // top lvl
  boxr16.display();

  polygon.display();
  hanger.display();
 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x:mouseX, y: mouseY});
}


function mouseReleased(){
  hanger.fly();
}