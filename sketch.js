
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var engine, world;
var block;

function preload(){
    
}
function setup() {
    createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine); 
    var polygon=new Polygon(200,100,50)
    sling=new SlingShot(polygon.body,{x:200, y:50})

    ground = new Ground(450, 380, 900, 10);
    
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);
    //level three
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);
    //top
    block16 = new Block(390, 155, 30, 40);


   
   
    block17 = new Block(640,175,30,40);
    block18 = new Block(670,175,30,40);
     block19 = new Block(740,175,30,40);
    block20 = new Block(770,175,30,40);
    //level three
    block21 = new Block(840,175,30,40);
    block22 = new Block(870,175,30,40);
    block23 = new Block(940,175,30,40);
    //top
    block24 = new Block(970,175,30,40);

    polygon = new Polygon(200,200,20)
}


function draw() {
    background("skyblue")
    text("SCORE : " + score, 900, 50)

    ground.display()
    stand1.display()
    stand2.display()
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    block19.display();
    block21.display();  
    block22 .display();
    block23 .display();
     block24.display
    
    block18 
    fill("grey");
    block16.display();
    block17.display()
    block18.display();
    polygon.display()
    fill("black")
    sling.display();


}
// function mouseDragged() {
//     Matter.Body.setPosition(plolygon.body, { x: mouseX, y: mouseY })
// }   
// function mouseReleased() {
//     sling.fly()
// }
// function keyPressed() {
//     if (keyCode === 32) {
//         sling.attach(plolygon.body)
//     }
// }