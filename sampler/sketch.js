let sounds, delay, delSlide, dy, y0;
dy = 10;
y0 = 120;

function preload(){
  delay = new Tone.FeedbackDelay(0.25, 0.5).toDestination();

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
  
  kickButton = createButton("Kick (1)");
  kickButton.position((width - kickButton.width) / 2, y0);
  kickButton.mousePressed(kickPB);
  
  snareButton = createButton("Snare (2)");
  snareButton.position((width - snareButton.width) / 2, y0 + snareButton.height + dy);
  snareButton.mousePressed(snarePB);

  hatButton = createButton("Hat (3)");
  hatButton.position((width - hatButton.width) / 2, y0 + 2 * (hatButton.height + dy));
  hatButton.mousePressed(hatPB);
  
  crashButton = createButton("Crash (4)");
  crashButton.position((width - crashButton.width) / 2, y0 + 3 * (crashButton.height + dy));
  crashButton.mousePressed(crashPB);

  tomButton = createButton("Tom (5)");
  tomButton.position((width - tomButton.width) / 2, y0 + 4 * (tomButton.height + dy));
  tomButton.mousePressed(tomPB);

  delSlide = createSlider(0, 1, 1, 0);
  delSlide.position(width / 3, 300);
}

function draw() {
  background(220);

  textSize(35);
  textAlign(CENTER);
  text('Drum Sampler', width / 2, 50);
  textSize(14);
  text('Click the buttons or use the Numbered Keys to play:', width / 2, 90);

  delay.wet.value = delSlide.value();

  textAlign(CENTER);
  textStyle(BOLDITALIC);
  textSize(14)
  text("Delay (wet/dry)", width / 2, 300);
  
  let wetAmount = floor(delSlide.value() * 100);
  text(`${wetAmount}%`, width / 2, 330);
}

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