//Using buttons and sliders

//variables used here
let sounds, delay, delSlide, dy, y0;
dy = 10;
y0 = 100;

function preload(){
  //makes an audio effect. We connect it to the destination speakers
  delay = new Tone.FeedbackDelay(0.25, 0.5).toDestination();
  
  //holds our soundfiles for playback. Is connected to the delay effect
  sounds = new Tone.Players({
    kick: "media/sweetkick.mp3",
    snare: "media/wonderfulsnare.mp3",
    hat: "media/sweethat.mp3",
    crash: "media/outsidecrash.mp3",
    tom: "media/screwperc.mp3",
  }).connect(delay);
}

function setup() {
  createCanvas(400, 400);
  //makes the buttons. we need to say what is displayed on the button, the position, and what happens when clicked
  kickButton = createButton("Kick");
  kickButton.position((width - kickButton.width) / 2, y0);
  kickButton.mousePressed(kickPB);
  
  snareButton = createButton("Snare");
  snareButton.position((width - snareButton.width) / 2, y0 + snareButton.height + dy);
  snareButton.mousePressed(snarePB);

  hatButton = createButton("Hat");
  hatButton.position((width - hatButton.width) / 2, y0 + 2 * (hatButton.height + dy));
  hatButton.mousePressed(hatPB);
  
  crashButton = createButton("Crash");
  crashButton.position((width - crashButton.width) / 2, y0 + 3 * (crashButton.height + dy));
  crashButton.mousePressed(crashPB);

  tomButton = createButton("Tom");
  tomButton.position((width - tomButton.width) / 2, y0 + 4 * (tomButton.height + dy));
  tomButton.mousePressed(tomPB);

  //makes the slider. need to set the values of the slider, and the position
  delSlide = createSlider(0, 1, 1, 0);
  delSlide.position(width / 3, 300);
}

function draw() {
  background(220);

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
function kickPB(){
  sounds.player("kick").start();
}

function snarePB(){
  sounds.player("snare").start();
}

function hatPB(){
  sounds.player("hat").start();
}

function crashPB(){
  sounds.player("crash").start();
}

function tomPB(){
  sounds.player("tom").start();
}

function keyPressed(){
  if(key==="1"){
    sounds.player("kick").start();
  } else if (key === "2") {
    sounds.player("snare").start();
  } else if (key === "3") {
    sounds.player("hat").start();
  } else if (key === "4") {
    sounds.player("crash").start();
  } else if (key === "5") {
    sounds.player("tom").start();
  }
}