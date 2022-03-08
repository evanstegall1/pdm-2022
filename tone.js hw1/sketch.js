//Using buttons and sliders

//variables used here
let sounds, workit, makeit, delay, delSlide;
let x1 = 75;
let x2 = 275;

function preload(){
  //makes an audio effect. We connect it to the destination speakers
  delay = new Tone.FeedbackDelay(0.5, 0.5).toDestination();
  
  //holds our soundfiles for playback. Is connected to the delay effect
  sounds = new Tone.Players({
    workIt: "daftaudio/workit.mp3",
    makeIt: "daftaudio/makeit.mp3",
    doIt: "daftaudio/doit.mp3",
    makesUs: "daftaudio/makesus.mp3",
    harder: "daftaudio/harder.mp3",
    better: "daftaudio/better.mp3",
    faster: "daftaudio/faster.mp3",
    stronger: "daftaudio/stronger.mp3",
    moreThan: "daftaudio/morethan.mp3",
    hour: "daftaudio/hour.mp3",
    our: "daftaudio/our.mp3",
    never: "daftaudio/never.mp3",
    ever: "daftaudio/ever.mp3",
    after: "daftaudio/after.mp3",
    workIs: "daftaudio/workis.mp3",
    over: "daftaudio/over.mp3"
  }).connect(delay);
}

function setup() {
  createCanvas(400, 400);
  //makes the buttons. we need to say what is displayed on the button, the position, and what happens when clicked
  workit = createButton("Work It");
  workit.position(x1, 50);
  workit.mousePressed(pb1);
  
  makeit = createButton("Make it");
  makeit.position(x2, 50);
  makeit.mousePressed(pb2);

  doit = createButton("Do It");
  doit.position(x1, 70);
  doit.mousePressed(pb3);
  
  makesUs = createButton("Makes Us");
  makesUs.position(x2, 70);
  makesUs.mousePressed(pb4);

  harder = createButton("Harder");
  harder.position(x1, 90);
  harder.mousePressed(pb5);
  
  better = createButton("Better");
  better.position(x2, 90);
  better.mousePressed(pb6);

  faster = createButton("Faster");
  faster.position(x1, 110);
  faster.mousePressed(pb7);
  
  stronger = createButton("Stronger");
  stronger.position(x2, 110);
  stronger.mousePressed(pb8);

  moreThan = createButton("More Than");
  moreThan.position(x1, 130);
  moreThan.mousePressed(pb9);
  
  hour = createButton("Hour");
  hour.position(x2, 130);
  hour.mousePressed(pb10);

  our = createButton("Our");
  our.position(x1, 150);
  our.mousePressed(pb11);
  
  never = createButton("Never");
  never.position(x2, 150);
  never.mousePressed(pb12);

  ever = createButton("Ever");
  ever.position(x1, 170);
  ever.mousePressed(pb13);
  
  after = createButton("After");
  after.position(x2, 170);
  after.mousePressed(pb14);

  workis = createButton("Work Is");
  workis.position(x1, 190);
  workis.mousePressed(pb15);
  
  over = createButton("Over");
  over.position(x2, 190);
  over.mousePressed(pb16);
  
  //makes the slider. need to set the values of the slider, and the position
  delSlide = createSlider(0, 1, 1, 0);
  delSlide.position(width / 3, 300);
  
}

function draw() {
  background(150);
  
  //assigns the value of the slider to the desired control. must happen in the draw loop to live update.
  delay.wet.value = delSlide.value();
  // label for the slider. doesn't happen by default. Don't forget to label your sliders
  textAlign(CENTER);
  textStyle(BOLDITALIC);
  textSize(14)
  text("Delay (wet/dry)", width / 2, 300);
  
  //visualization of the current position of the slider
  let wetAmount = floor(delSlide.value() * 100);
  text(`${wetAmount}%`, width / 2, 330);
}


//call back functions to be called when a button is pressed. One for each button. These just playback a sound.
function pb1(){
  sounds.player("workIt").start();
}

function pb2(){
  sounds.player("makeIt").start();
}

function pb3(){
  sounds.player("doIt").start();
}

function pb4(){
  sounds.player("makesUs").start();
}

function pb5(){
  sounds.player("harder").start();
}

function pb6(){
  sounds.player("better").start();
}
function pb7(){
  sounds.player("faster").start();
}

function pb8(){
  sounds.player("stronger").start();
}
function pb9(){
  sounds.player("moreThan").start();
}

function pb10(){
  sounds.player("hour").start();
}
function pb11(){
  sounds.player("our").start();
}

function pb12(){
  sounds.player("never").start();
}
function pb13(){
  sounds.player("ever").start();
}

function pb14(){
  sounds.player("after").start();
}
function pb15(){
  sounds.player("workIs").start();
}

function pb16(){
  sounds.player("over").start();
}
