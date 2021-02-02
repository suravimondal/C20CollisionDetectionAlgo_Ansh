var fixedRect, movingRect;




function setup() {
  createCanvas(800,400);

  fixedRect =createSprite(300,100,60,70);
  fixedRect.shapeColor= "indigo";

  movingRect= createSprite(100,100,80,30);
  movingRect.shapeColor= "red";

  movingRect.debug= true;
  fixedRect.debug= true;

}

function draw() {
  background(0);  

  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;

  console.log(fixedRect.x-movingRect.x);
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2)
    {
movingRect.shapeColor= "yellow";
  }
  else{
    movingRect.shapeColor= "red";
  }

  drawSprites();
}