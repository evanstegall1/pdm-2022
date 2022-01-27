let x = 300;
let y = 300;
let a = 50;
let b = 50;
let c1;

function setup() {
  createCanvas(600, 600);
  c1 = color(0, 0, 225);
}

function keyReleased() {
  console.log('key released');
  if (c1 == color(225, 0, 0)) {
    print('blue');
    c1 = color(0, 0, 225);
  }
  else{
    print('red');
    c1 = color(225, 0, 0);
  }
}

function draw() {
  background(100);

  targetSymbol(100, 100, c1, color(225, 225, 225));
  //targetSymbol(200, 200, color(0, 225, 0), color(225, 225, 225));

}

function targetSymbol(x, y, c1, c2) {
  fill(c1);
  ellipse(x, y, a, b);
  fill(c2);
  ellipse(x, y, a * 4 / 5, b * 4 / 5);
  fill(c1);
  ellipse(x, y, a * 3 / 5, b * 3 / 5);
  fill(c2);
  ellipse(x, y, a * 2 / 5, b * 2 / 5);
  fill(c1);
  ellipse(x, y, a / 5, b / 5);
}