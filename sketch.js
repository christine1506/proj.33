var bg 
var snow

function preload() {
  bg=loadImage("snow1.jpg")
  snowfall=loadImage("snow4.webp", "snow5.webp")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  snow = createSprite(400, 200, 50, 50);
  snow.addImage(snowfall)
  snow.scale = 0.2
}

function draw() {
  background(bg);  
  drawSprites();
}