let spriteSheet;
let insect = [];
let count = 10;
let a = 20;
let speed = 1;

function preload() {
  spriteSheet = loadImage("insect.png");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  for (i = 0; i < count; i++) {
  insect[i] = new Insect(spriteSheet, random(a, 600 - (2 * a)), random(50, 600 - (2 * a)), speed, random ([-1, 1]));
  }
}

function mousePressed() {
  for (i = 0; i < count; i++) {
    insect[i].grab();
  }
}

function draw() {
  background(100, 255, 120);
  for (i = 0; i < count; i++) {
    insect[i].draw();
  }
}

class Insect {
  constructor(spriteSheet, x, y, speed, move) {
    this.spriteSheet = spriteSheet;
    this.sx = 0;
    this.x = x;
    this.y = y;
    this.move = 0;
    this.facing = 1;
    this.speed = speed;
    this.move = move;
    this.facing = move;
  }

  draw() {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
    rotate(PI / 2);

    if (this.move == 0) {
      image(this.spriteSheet, 0, 0, 2 * a, 2 * a , 416, 0, 32, 32);
    } else {
      image(this.spriteSheet, 0, 0, 2 * a, 2 * a, 128 + 32 * (this.sx), 0, 32, 32);
    }

    if (frameCount % 6 == 0) {
      this.sx = (this.sx + 1) % 7;
    }

    this.x += this.speed * this.move;

    if (this.x < 2 * a) {
      this.move = 1;
      this.facing = 1;
    } else if (this.x > width - 2 * a) {
      this.move = -1;
      this.facing = -1;
    }
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

  grab() {
    if (mouseX > this.x - a && mouseX < this.x + a && 
      mouseY > this.y - a && mouseY < this.y + a) {
        this.stop();
        this.grabbed = true;
    }
  }
}

