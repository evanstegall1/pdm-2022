let img;
let angle = 0;
let score = 0;

function preload() {
  img = loadImage("turtle.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
}

function draw() {
  background(255, 255, 255);
  translate(mouseX, mouseY);
  rotate(radians(angle));
  scale(1, -1);
  image(img, 0, 0, 200, 200);


  image(img, 0, 200, 200, 200);
  
  angle += 1;
  // if (angle % 360 == 1) {
  //   score += 1;
  // }
}