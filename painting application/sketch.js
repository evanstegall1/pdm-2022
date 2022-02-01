function setup() {
  createCanvas(400, 400);
}

function draw() {
  let c = 'black';
  
  while (mouseIsPressed) {
    fill(c);
    ellipse(mouseX, mouseY, 4, 4);
  }
}