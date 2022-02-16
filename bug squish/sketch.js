let spriteSheet;
let insect = [];
let count = 80;
let a = 20;
let speed = 1;
let startTime;
let gameState = 'wait';
let score = 0;

function preload() {
  spriteSheet = loadImage("insect.png");
  checkerboard = loadImage("checkerboard.jpg");
}

function setup() {
  createCanvas(600, 600);
  imageMode(CENTER);
  for (i = 0; i < count; i++) {
  insect[i] = new Insect(spriteSheet, random(a, 600 - a), random(60, 600 - a), speed, random ([-1, 1]));
  }
}

function timer() {
  return int((millis() - startTime) / 1000);
}

function mousePressed() {
  for (i = 0; i < count; i++) {
    insect[i].grab();
  }
}

function draw() {
  image(checkerboard, 300, 300, 600, 600, 0, 0, 500, 600);

  textStyle(BOLDITALIC);
  if (gameState == 'wait') {
    fill('yellow');
    rect(216, 280, 168, 30);
    fill('black');
    textSize(15);
    textAlign(CENTER);
    text('Press any key to start', 300, 300);
    if (keyIsPressed) {
      startTime = millis();
      gameState = 'playing';
    }
  } else if (gameState == 'playing') {
    for (i = 0; i < count; i++) {
      insect[i].draw();
    }
    fill('yellow');
    rect(0, 0, 125, 40);
    fill('black');
    fill('yellow');
    rect(465, 0, 135, 40);
    fill('black');
    textSize(30);
    text("Score: " + score, 530, 30);

    let time = timer();
    let totalTime = 30;
    text("Time: " + (totalTime - time), 60, 30);
    if (time >= totalTime) {
      gameState = 'end';
    }

  } else if (gameState == 'end') {
    fill('yellow');
    rect(198, 220, 200, 100);
    fill('black');
    textSize(34);
    text("Game Over", 300, 255);
    line(216, 265, 380, 265);
    textSize(22);
    text("Final Score: " + score, 300, 290);
    textSize(15);
    text("(Press any key to restart)", 300, 310);
    if (keyIsPressed) {
      startTime = millis();
      gameState = 'playing';
      score = 0;
      setup();
    }
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
    this.score = score;
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
      this.speed = this.speed + (1 / 160);
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
        if (this.move != 0) {
          score++;
          draw();
        }
        this.stop();
        this.grabbed = true;
    }
  }
}





