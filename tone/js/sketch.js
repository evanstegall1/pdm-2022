/* PDM Course: Sound Unit

Loading and Playing a Sample

Code by Tate Carson & Anthony T. Marasco [2018]
*/
let baseURL = "https://s3-us-west-1.amazonaws.com/leesamples/samples/";

 let player1 = new Tone.Player(
    baseURL + "Morphed/All+Hands+On+Deck.mp3"
  ).toDestination();

let  player2 = new Tone.Player(baseURL + "Morphed/Waves+On+Mars.mp3").toDestination();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  textFont("Helvetica");
  textSize(17);
  fill("purple");
  textAlign(CENTER);
  text(
    "Press the 'P' Key or Click the Mouse to Play a Sound!!",
    width / 2,
    height / 2
  );
  text('Press space bar to stop', width /2 , height/2 + 50)
}

function draw() {
  /*Unless they are encapsulated inside of a single-event test (like mouseIsPressed or keyIsPressed), audio-related elements (including building and triggering sound engines) should be kept OUT of the draw loop, due to the fact that it loops all code inside of it 60 times per second. Even in the instance below, you can here a "stuttering" effect occur when you click the mouse. This is due to the draw() loop causing multiple triggers of a sampler or synthesizer per second, resulting in noise. The best option is to place these events into functions like keyPressed() or mousePressed()
   */
}

// only play once per click 
function mouseClicked() {
  player1.start();
}

function keyPressed() {
  if (key == "P" || "p") {
    player2.start();
  } 
  
  if(key == ' ') {
    console.log("space bar")
    player1.stop()
    player2.stop()
  }
  console.log(key);
}
