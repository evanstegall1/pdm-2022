let a = 40;
let b = 4;

let c1 = 'black';
let c2 = 'red';
/* let c3 = 'green';
let c4 = 'blue';
let c5 = 'yellow';
let c6 = 'orange';
let c7 = 'pink';
let c8 = 'white'; */

let x = a / 2;
let y = a / 2;

let d1 = dist(mouseX, mouseY, a / 2, a / 2);
let d2 = dist(mouseX, mouseY, a / 2, 3 * a / 2);

function setup() {
  createCanvas(800, 400);
}

function draw() {
  fill(c1);
  circle(a / 2, a / 2, a);
  fill(c2);
  circle(a / 2, 3 * a / 2, a);

  if (d1 < a / 2) {
    mouseReleased()
  }
  if (d2 < a / 2) {
    mouseReleased()
  }
  if (mouseIsPressed) {
    mouseReleased()
  } 
}

function mouseReleased() {
  if (d1 < a) {
    
  }
}

