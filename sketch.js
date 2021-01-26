const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ground2,ground3,ground4,ground5,ground6,ground7,ground8;
var ball,striker;

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

   //GROUND
    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(100,600,3000,20,ground_options);
    World.add(world,ground);

//GROUND2
var ground2_options ={
    isStatic: true
}
ground2 = Bodies.rectangle(150,80,300,20,ground2_options);
World.add(world,ground2);


//GROUND3
var ground3_options ={
    isStatic: true
}
ground3 = Bodies.rectangle(600,200,300,20,ground3_options);
World.add(world,ground3);


//GROUND4
var ground4_options ={
    isStatic: true
}
ground4 = Bodies.rectangle(800,300,300,20,ground4_options);
World.add(world,ground4);


//GROUND5
var ground5_options ={
  isStatic: true
}
ground5 = Bodies.rectangle(200,200,300,20,ground5_options);
World.add(world,ground5);


//GROUND6
var ground6_options ={
  isStatic: true
}
ground6 = Bodies.rectangle(1100,400,300,20,ground6_options);
World.add(world,ground6);


//GROUND4
var ground7_options ={
  isStatic: true
}
ground7 = Bodies.rectangle(500,500,300,20,ground7_options);
World.add(world,ground7);


//GROUND8
var ground8_options ={
  isStatic: true
}
ground8 = Bodies.rectangle(900,100,300,20,ground8_options);
World.add(world,ground8);


    //BALL
    var ball_option={
       restitution: 1
    }
    ball = Bodies.rectangle(100,50,10,10,ball_option);
    World.add(world,ball);

    //striker
    var striker_option ={
      restitution: 2
    }
striker = Bodies.rectangle(200,200,50,50,striker_option);
World.add(world,striker);


}

function draw(){
    background(0);
    Engine.update(engine);
    striker.position.x = mouseX;
    striker.position.y = mouseY;
    


    //GROUND
    push();
    strokeWeight(6);
    stroke("green");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,3000,20);
    pop();
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,3000,20);

    //GROUND2
    push();
    strokeWeight(6);
    stroke("red");
    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,300,20);
    pop();
    rectMode(CENTER);
    rect(ground2.position.x,ground2.position.y,300,20);

    //GROUND3
    push();
    strokeWeight(6);
    stroke("orange");
    rectMode(CENTER);
    rect(ground3.position.x,ground3.position.y,300,20);
    pop();
    rectMode(CENTER);
    rect(ground3.position.x,ground3.position.y,300,20);

    //GROUND4
    push();
    strokeWeight(6);
    stroke("yellow");
    rectMode(CENTER);
    rect(ground4.position.x,ground4.position.y,300,20);
    pop();
    rectMode(CENTER);
    rect(ground4.position.x,ground4.position.y,300,20);

  //GROUND5
  push();
  strokeWeight(6);
  stroke("green");
  rectMode(CENTER);
  rect(ground5.position.x,ground5.position.y,300,20);
  pop();
  rectMode(CENTER);
  rect(ground5.position.x,ground5.position.y,300,20);

  //GROUND5
  push();
  strokeWeight(6);
  stroke("lightblue");
  rectMode(CENTER);
  rect(ground5.position.x,ground5.position.y,300,20);
  pop();
  rectMode(CENTER);
  rect(ground5.position.x,ground5.position.y,300,20);

  //GROUND6
  push();
  strokeWeight(6);
  stroke("blue");
  rectMode(CENTER);
  rect(ground6.position.x,ground6.position.y,300,20);
  pop();
  rectMode(CENTER);
  rect(ground6.position.x,ground6.position.y,300,20);

  //GROUND7
  push();
  strokeWeight(6);
  stroke("purple");
  rectMode(CENTER);
  rect(ground7.position.x,ground7.position.y,300,20);
  pop();
  rectMode(CENTER);
  rect(ground7.position.x,ground7.position.y,300,20);

  //GROUND8
  push();
  strokeWeight(6);
  stroke("pink");
  rectMode(CENTER);
  rect(ground8.position.x,ground8.position.y,300,20);
  pop();
  rectMode(CENTER);
  rect(ground8.position.x,ground8.position.y,300,20);


    //BALL
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    
    //striker
    ellipseMode(RADIUS);
    ellipse(striker.position.x, striker.position.y, 50, 50);

}