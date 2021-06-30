var backgroundImg,satelliteImg,spacecraft1Img;
var spacecraft2Img,spacecraft3Img,spacecraft4Img;
var iss,spacecraft,hasDocked;

function preload(){
backgroundImg=loadImage("spacebg.jpg");
satelliteImg=loadImage("iss.png");
spacecraft1Img=loadImage("spacecraft1.png");
spacecraft2Img=loadImage("spacecraft2.png");
spacecraft3Img=loadImage("spacecraft3.png");
spacecraft4Img=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1100,500);
  hasDocked=false;
iss= createSprite(550, 200, 50, 50);
iss.addImage(satelliteImg);
iss.scale=0.6;

spacecraft= createSprite(550, 350, 50, 50);
spacecraft.addImage(spacecraft1Img);
spacecraft.scale=0.3;


}

function draw() {
  background(backgroundImg); 
  spacecraft.depth=iss.depth;
  if(!hasDocked) {
    x=600;
    if(keyDown('LEFT_ARROW')){
    spacecraft.addImage(spacecraft3Img);
    spacecraft.x+=10;
    }
    if(keyDown('RIGHT_ARROW')){
      spacecraft.addImage(spacecraft4Img);
      spacecraft.x-=10;
      }
      if(keyDown('DOWN_ARROW')){
        spacecraft.addImage(spacecraft2Img);      
        }
        if(keyDown('UP_ARROW')){
          spacecraft.y-=5;
          }
  }
  if(spacecraft.y===200){
    textSize(30);
    text("Docking Successful!",700,300);
    fill("red");
    hasDocked=true;
  }
  drawSprites();
  console.log(hasDocked);
}