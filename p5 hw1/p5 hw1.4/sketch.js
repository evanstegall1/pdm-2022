function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 130);

  //circle
  fill(0, 130, 0);
  strokeWeight(5);
  stroke(255);
  
  circle(200, 200, 200);

  //star
  fill(255, 0, 0);
  strokeWeight(5);
  stroke(255);

  beginShape();
  vertex(200, 100);
  vertex(222, 168);
  vertex(295, 168);
  vertex(237, 210);
  vertex(260, 280);
  vertex(200, 238);
  vertex(140, 280);
  vertex(163, 210);
  vertex(105, 168);
  vertex(177, 168);
  endShape(CLOSE);
}