let x = 800;
let y = 400;
let z = 8; 
let a = 30;

function setup() {
  createCanvas(x, y);
}

function draw() {
  // canvas
  background(255);
  noFill();
  strokeWeight(4);
  stroke(0);
  rect(0, 0, x, y);

  // color selector
  noStroke();

  fill(0, 0, 0);
  rect(z/2, z/2, a, a);

  fill(255, 0, 0);
  rect(z/2, a+3*z/4, a, a);

  fill(0, 255, 0);
  rect(z/2, 2*a+z, a, a);

  fill(0, 0, 255);
  rect(z/2, 3*a + 5*z/4, a, a);
  
  fill(255, 255, 0);
  rect(z/2, 4*a + 3*z/2, a, a);
  
  fill(255, 110, 0);
  rect(z/2, 5*a + 7*z/4, a, a);
  
  fill(255, 0, 255);
  rect(z/2, 6*a + 2*z, a, a);
  
  strokeWeight(2);
  stroke(0);
  fill(255, 255, 255);
  rect(z/2, 7*a + 9*z/4, a, a);

  

}