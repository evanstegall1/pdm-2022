/*
let a = 45;

let color1 = 'black';
let color2 = 'red';
let color3 = 'green';
let color4 = 'blue';
let color5 = 'yellow';
let color6 = 'orange';
let color7 = 'pink';
let color8 = 'white';
*/
function setup() {
  let x = 800;
  let y = x / 2;

  createCanvas(x, y);
}
/*
function draw() {
  // color selector
  let c = color1;

  noStroke();

  fill(color1);
  rect(0, 0, a, a);

  fill(color2);
  rect(0, a, a, a);

  fill(color3);
  rect(0, 2 * a, a, a);

  fill(color4);
  rect(0, 3 * a, a, a);

  fill(color5);
  rect(0, 4 * a, a, a);

  fill(color6);
  rect(0, 5 * a, a, a);

  fill(color7);
  rect(0, 6 * a, a, a);

  fill(color8);
  rect(0, 7 * a, a, a);


  while (mouseIsPressed) {
    fill(c);
    circle(mouseX, mouseY, 4);
  }
}
*/
function draw() {
  let c;
  
  if (mouseIsPressed) {
    c = color(0, 0, 0);
  }

  fill(c);
  ellipse(mouseX, mouseY, 10, 10);
}