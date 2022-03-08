/*
Creating a simple synthesizer using Tone.js
Programming Digital Media
Code by Matthew A. Bardin [2020]
*/

let simpSynth; //first, you need a variable to store each synth you want to makea

function setup() {
  createCanvas(400, 400);
//then you assign that variable to be a new Tone.Synth object and sets its unique parapeters
  simpSynth = new Tone.Synth({
    oscillator: {
      type: "square" //the type of waveform the synthesizer produces. Can be square, since, triangle, or sawtooth
    },
    envelope: { //sets the various sound properties for the synth
      attack: 0.05,
      decay: 0.5,
      sustain: 1,
      release: 5
    }
  }).toMaster(); //sends the synth's output to the master speakers
}
//never trigger sounds in the draw function. it will cause playback malfunctions
function draw() {
  background(220);
  textAlign(CENTER);
  textFont('futura');
  text("Click me to play 'tuning A'", width / 2, height / 2);
 
}

//use mousePressed or keyPressed instead
function mousePressed() {
  //triggers the synth. you can specify the pitch and the duration
  simpSynth.triggerAttackRelease("A4", 1);
}