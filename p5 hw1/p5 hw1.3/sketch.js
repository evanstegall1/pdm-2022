function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0);

  //pac-man figures
  noStroke();

  //pac-man body
  fill(255, 255, 0);
  arc(100, 100, 160, 160, PI + QUARTER_PI, PI - QUARTER_PI);

  //ghost body
  fill(255, 50, 0);
  rect(220, 100, 160, 80);
  arc(300, 100, 160, 160, PI, 0);
  
  //ghost eyes
  fill(255);
  circle(260, 100, 50);
  circle(340, 100, 50);
  fill(0, 0, 255);
  circle(260, 100, 30);
  circle(340, 100, 30);

}