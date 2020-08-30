var car,wall,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500);
  car=createSprite(99,200,45,50);
  wall=createSprite(1500,200,60,height/2);
  car.velocityX=speed
}

function draw() {
  background(255,255,255);
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22509;
    console.log(deformation)
    if (deformation>180){
car.shapeColor=color(255,0,0)
    }
    if (deformation>100&&deformation<=180){
      car.shapeColor=color(230,230,0)
          }
    if (deformation<=100){
            car.shapeColor=color(0,255,0)
                }
  }  
  drawSprites();
}