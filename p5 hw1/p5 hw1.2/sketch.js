function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

//circles
  noStroke();

//red
  fill(255, 0, 0, 80);
  circle(200, 133, 220);

//blue
  fill(0, 0, 255, 80);
  circle(133, 267, 220);
  
//green
  fill(0, 255, 0, 80);
  circle(267, 267, 220);
}