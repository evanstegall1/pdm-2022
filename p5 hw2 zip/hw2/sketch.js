let a = 40;
let c = 'black';

// canvas
function setup() {
  createCanvas(800, 400);
}

function draw() {
  let c1 = 'red';
  let c2 = 'orange';
  let c3 = 'yellow';
  let c4 = 'green';
  let c5 = 'cyan';
  let c6 = 'blue';
  let c7 = 'magenta';
  let c8 = 'brown';
  let c9 = 'white';
  let c10 = 'black';


  // paint selectors
  button = createButton('');
  button.style('background-color', c1);
  button.position(2, 2);
  button.size(a, a);
  button.mousePressed(brush1);

  button = createButton('');
  button.style('background-color', c2);
  button.position(2, 2 + a);
  button.size(a, a);
  button.mousePressed(brush2);

  button = createButton('');
  button.style('background-color', c3);
  button.position(2, 2 + 2 * a);
  button.size(a, a);
  button.mousePressed(brush3);
  
  button = createButton('');
  button.style('background-color', c4);
  button.position(2, 2 + 3 * a);
  button.size(a, a);
  button.mousePressed(brush4);
  
  button = createButton('');
  button.style('background-color', c5);
  button.position(2, 2 + 4 * a);
  button.size(a, a);
  button.mousePressed(brush5);
  
  button = createButton('');
  button.style('background-color', c6);
  button.position(2, 2 + 5 * a);
  button.size(a, a);
  button.mousePressed(brush6);
  
  button = createButton('');
  button.style('background-color', c7);
  button.position(2, 2 + 6 * a);
  button.size(a, a);
  button.mousePressed(brush7);
  
  button = createButton('');
  button.style('background-color', c8);
  button.position(2, 2 + 7 * a);
  button.size(a, a);
  button.mousePressed(brush8);

  button = createButton('');
  button.style('background-color', c9);
  button.position(2, 2 + 8 * a);
  button.size(a, a);
  button.mousePressed(brush9);

  button = createButton('');
  button.style('background-color', c10);
  button.position(2, 2 + 9 * a);
  button.size(a, a);
  button.mousePressed(brush10);


  // paint
  if (mouseIsPressed) {
    stroke(c);
    strokeWeight(12);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


// brushes
function brush1() {
  c = 'red';
}

function brush2() {
  c = 'orange';
}

function brush3() {
  c = 'yellow';
}

function brush4() {
  c = 'green';
}

function brush5() {
  c = 'cyan';
}

function brush6() {
  c = 'blue';
}

function brush7() {
  c = 'magenta';
}

function brush8() {
  c = 'brown';
}

function brush9() {
  c = 'white';
}
function brush10() {
  c = 'black';
}