

function setup() {
  createCanvas(400, 400);
 
}

function draw() {
  //background(100);

  let c = color(255, 204, 0);

  
  
  fill(c);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 10, 10);
  }
}