
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world ;
var backgroundImg;
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    timeChange();
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(384,300,170,10);
    ground1 = new Ground(602,190,140,10);

    block1 = new Block1(330,274);
    block2 = new Block1(362,274);
    block3 = new Block1(394,274);
    block4 = new Block1(426,274);

    block5 = new Block2(346,232);
    block6 = new Block2(378,232);
    block7 = new Block2(410,232);

    block8 = new Block3(361,192);
    block9 = new Block3(393,192);

    block10 = new Block4(376,151);

    block11 = new Block2(570,162);
    block12 = new Block2(601,162);
    block13 = new Block2(633,162);

    block14 = new Block3(583,121);
    block15 = new Block3(616,121);

    block16 = new Block4(601,80);

    poligon = new Triger(110,90);
    
    rope = new Rope(poligon.body,{x:110, y:90});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    

    text("score :"+score, 662, 24)
    // background(255,255,255);
    text(mouseX+','+mouseY,30,45);
    Engine.update(engine);
    strokeWeight(2);

    ground.display();
    ground1.display();

    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();

    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();

    block8.display();
    block8.score();
    block9.display();
    block9.score();

    block10.display();
    block10.score();

    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block13.display();
    block13.score();

    block14.display();
    block14.score();
    block15.display();
    block15.score();

    block16.display();
    block16.score();

    poligon.display();

    rope.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(poligon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed () {
    if(keyCode === 32) {
       rope.attach(poligon.body)
    }
}

async function timeChange() {
    var responce = await fetch("worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responceJSON = await responce.json();
    var datetime = responceJSON.datetime
    var hour = datetime.slice(11,13)

    if(hour <=0600 && hour >= 1600){
        bg =  "bg.png";
    }

    else {
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
