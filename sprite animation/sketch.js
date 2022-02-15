let character1;
let character2;
let character3;
let character4;
let character5;
let pixelGrass;
let trees;
let bushes;

function preload() {
  spriteSheet1 = loadImage("SpelunkyGuy.png");
  spriteSheet2 = loadImage("Green.png");
  spriteSheet3 = loadImage("Blue.png");
  spriteSheet4 = loadImage("GoldenMonk.png");
  spriteSheet5 = loadImage("Mammoth.png");
  pixelGrass = loadImage("PixelGrass.png");
  trees = loadImage("Trees.png");
  bushes = loadImage("bushes.png");
}

function setup() {
  createCanvas(600, 360);
  imageMode(CENTER);
  character1 = new Character1(spriteSheet1, 200, 305);
  character2 = new Character2(spriteSheet2, 250, 305);
  character3 = new Character3(spriteSheet3, 150, 305);
  character4 = new Character4(spriteSheet4, 110, 300);
  character5 = new Character5(spriteSheet5, 380, 265);
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    character1.go(1);
    character2.go(1);
    character3.go(1);
    character4.go(1);
    character5.go(1);
  }
  else if (keyCode == LEFT_ARROW) {
    character1.go(-1);
    character2.go(-1);
    character3.go(-1);
    character4.go(-1);
    character5.go(-1);
  }
}

function keyReleased() {
  character1.stop();
  character2.stop();
  character3.stop();
  character4.stop();
  character5.stop();
}

function draw() {
  // sky
  background(110, 110, 240);

  // sun
  noStroke();
  fill(250, 193, 35);
  arc(600, 0, 400, 400, QUARTER_PI, PI);

  // back tree
  image(trees, 120, 0, 700, 700);

  // grass
  for (let g = 0; g < 5; g++) {
    image(pixelGrass, g * 120, 380, 240, 160, 0, 180, 400, 220);
  }

  // bushes
  for (let b = 3; b < 10; b++){
    image(bushes, b * 64, 290, 64, 60, 56, 40, 64, 60);
  }


  // characters
  character5.draw();
  character4.draw();
  character3.draw();
  character2.draw();
  character1.draw();

  // front tree
  image(trees, 50, 10, 840, 840);
}

class Character1 {
  constructor(spriteSheet1, x, y) {
    this.spriteSheet1 = spriteSheet1;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;  
  }

  draw () {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 0) {
      image(this.spriteSheet1, 0, 0, 90, 90, 0, 0, 80, 80);
    }
    else {
      image(this.spriteSheet1, 0, 0, 90, 90, 80 * (this.sx + 1), 0, 80, 80);
    }

    if (frameCount % 6 == 0) {
      this.sx = (this.sx + 1) % 8;
    }

    this.x += 3 * this.move;
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }
  
  stop() {
    this.move = 0;
  }
}

class Character2 {
  constructor(spriteSheet2, x, y) {
    this.spriteSheet2 = spriteSheet2;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;  
  }

  draw () {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 0) {
      image(this.spriteSheet2, 0, 0, 80, 80, 0, 0, 80, 80);
    }
    else {
      image(this.spriteSheet2, 0, 0, 80, 80, 80 * (this.sx + 1), 0, 80, 80);
    }

    if (frameCount % 6 == 0) {
      this.sx = (this.sx + 1) % 8;
    }

    this.x += 3 * this.move;
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }
  
  stop() {
    this.move = 0;
  }
}

class Character3 {
  constructor(spriteSheet3, x, y) {
    this.spriteSheet3 = spriteSheet3;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;  
  }

  draw () {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 0) {
      image(this.spriteSheet3, 0, 0, 80, 80, 0, 0, 80, 80);
    }
    else {
      image(this.spriteSheet3, 0, 0, 80, 80, 80 * (this.sx + 1), 0, 80, 80);
    }

    if (frameCount % 6 == 0) {
      this.sx = (this.sx + 1) % 8;
    }

    this.x += 3 * this.move;
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }
  
  stop() {
    this.move = 0;
  }
}

class Character4 {
  constructor(spriteSheet4, x, y) {
    this.spriteSheet4 = spriteSheet4;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;  
  }

  draw () {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 0) {
      image(this.spriteSheet4, 0, 0, 70, 70, 0, 0, 80, 80);
    }
    else {
      image(this.spriteSheet4, 0, 0, 70, 70, 80 * (this.sx + 1), 0, 80, 80);
    }

    if (frameCount % 6 == 0) {
      this.sx = (this.sx + 1) % 8;
    }

    this.x += 3 * this.move;
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }
  
  stop() {
    this.move = 0;
    image(this.spriteSheet, 0, 0, 32, 32 , 416 , 0, 2 * a, 2 * a);
  }
}

class Character5 {
  constructor(spriteSheet5, x, y) {
    this.spriteSheet5 = spriteSheet5;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;  
  }

  draw () {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);

    if (this.move == 0) {
      image(this.spriteSheet5, 0, 0, 200, 200, 0, 0, 160, 160);
    }
    else {
      image(this.spriteSheet5, 0, 0, 200, 200, 160 * (this.sx + 1), 0, 160, 160);
    }

    if (frameCount % 10 == 0) {
      this.sx = (this.sx + 1) % 7;
    }

    this.x += 2 * this.move;
    pop();
  }

  go(direction) {
    this.move = direction;
    this.facing = direction;
    this.sx = 3;
  }
  
  stop() {
    this.move = 0;
  }
}

