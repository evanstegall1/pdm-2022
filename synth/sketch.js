

let button1, button2, sounds, delay;

function preload() {
  delay = new Tone.FeedbackDelay(0.5, 0.5).toDestination();

  sounds = new Tone.Players({
    workit: "daftpunk/workit.wav",
    makeit: "daftpunk/makeit.wav",
    doit: "daftpunk/doit.wav",
    makesus: "daftpunk/makesus.wav",
    harder: "daftpunk/harder.wav",
    better: "daftpunk/better.wav",
    faster: "daftpunk/faster.wav",
    stronger: "daftpunk/stronger.wav",
    morethan: "daftpunk/morethan.wav",
    hour: 'daftpunk/hour.wav',
    our: 'daftpunk/our.wav',
    never: 'daftpunk/never.wav',
    ever: 'daftpunk/ever.wav',
    after: 'daftpunk/after.wav',
    workis: 'daftpunk/workis.wav',
    over: 'daftpunk/over.wav'
  }).connect(delay);
}

//sounds.toDestination();

// UI elements



function preload() {
  // could load audio and setup buttons here as well...
}

function setup() {
  createCanvas(400, 400);

  button1 = createButton("Work It", 'workit');
  button1.position(200, 200);
  button1.mousePressed(buttonSound1);
  
  button2 = createButton("Make It", 'makeit');
  button2.position(200, 300);
  button2.mousePressed(buttonSound2);

  delSlide = createSlider(0, 1, 1, 0);
  delSlide.position(width / 2, 250);
  
}

function draw() {
  background(220);

  delay.wet.value = delSlide.value();
  
  text("delay wet/dry", width / 2, 240);
  
  let wetAmount = floor(delSlide.value() * 100);
  text(`${wetAmount}%`, width / 2, 280);
}

/*
function keyPressed(){
  if(key==="1"){
    sounds.player("workit").start();
  } else if (key === "2"){
    sounds.player("makeit").start();
  }
}
*/

function buttonSound1(){
  sounds.player("workit").start();
}
function buttonSound2(){
  sounds.player("makeit").start();
}

/*
workit: "daftpunk/workit.wav",
makeit: "daftpunk/makeit.wav",
doit: "daftpunk/doit.wav",
makesus: "daftpunk/makesus.wav",
harder: "daftpunk/harder.wav",
better: "daftpunk/better.wav",
faster: "daftpunk/faster.wav",
stronger: "daftpunk/stronger.wav",
morethan: "daftpunk/morethan.wav",
hour: 'daftpunk/hour.wav',
our: 'daftpunk/our.wav',
never: 'daftpunk/never.wav',
ever: 'daftpunk/ever.wav',
after: 'daftpunk/after.wav',
workis: 'daftpunk/workis.wav',
over: 'daftpunk/over.wav'

  button1 = createButton("Work It", 'workit');
  button1.position(200, 200);
  button1.mousePressed(buttonSound);
  
  button2 = createButton("Make It", 'makeit');
  button2.position(200, 300);
  button2.mousePressed(buttonSound);
*/