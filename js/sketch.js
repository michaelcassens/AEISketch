var x = 0;
var y = 0;
var explode = false;
var myW;
var words = [];
var letters = [];
var direction = 0;
var angle = 1;
var angle2 = 1;
var state = 0;
var resetTime = false;
var w = 200;
var h = 50;
var k = 0;
var count = 0;
const particles = [];
const rain = [];
var result;
var ypos = 0;
var xpos = 0;
var start = 0;
var displayAll = false;
var line1ending = ["E", "M", "E", "R", "G", "E", "S", "T", "R", "O", "N", "G", "E", "R"];
var myFont;
var myEnding;
var bottom = 50;
var allAtTheBottom = false;
function preload() {
  result = loadStrings('assets/words.txt');
  myFont = loadFont('./assets/fonts/IndieFlower-Regular.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  startProgram();

}

function draw() {
  background(200);
  fill(45, 49, 120);
  textSize(100);

  
  for (let i = 0; i < letters.length; i++) {
    textAlign(CENTER);
    textFont(myFont);
    text(letters[i].getLetter(), letters[i].getX(), letters[i].getY());
  }

  textSize(32);
if(!displayAll)
{

  if (count >= 0) {
    for (var i = 0; i < words.length; i++) {
      words[i].update(bottom);
      words[i].draw();
      //if (words[i].getX() > width || words[i].getY() >= height-bottom || words[i].getX() < 0 || words[i].getY() < 0) {
        if (words[i].getY() >= height-bottom) {
        //words.splice(i, 1);
        allAtTheBottom = true;
      }
      else
      allAtTheBottom = false;
    }
    console.log(words.length + ":" + allAtTheBottom);
    if (allAtTheBottom) {
      reset();
    }
  }
}

  if (displayAll) {
    for (let i = 0; i < 20; i++) {
      let p = new Particle(random(displayWidth), displayHeight-50, random(-15, 15), random(-15, -10),255);
      particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      }
    }

    // have some fall from the sky
    for (let i = 0; i < 20; i++) {
      let p = new Particle(random(displayWidth),0, 0, random(1, 5),255);
      rain.push(p);
    }
    for (let i = rain.length - 1; i >= 0; i--) {
      rain[i].update();
      rain[i].show();
      if (rain[i].finished()) {
        // remove this particle
        rain.splice(i, 1);
      }
    }

  }
}

function reset() {
  //allAtTheBottom = 0;
  console.log("reset");
  bottom+=15;
  count++;
  for (var i = 0; i < 25; i++) {
    direction = 1;//Math.floor(random(1, 9));
    x = random(50, width -50);
    y = random(50, height -50)

    number = floor(random(0, result.length));

    myW = new Word(x, y, w, h, result[number], direction);
    words.push(myW);
  }
}

function showEnding() {
  if (k == 6) {
    xpos = width/4;
    ypos += 150;
  }
  if (k < line1ending.length) {
    var letterObj = new letter(line1ending[k], xpos, ypos);
    letters[k] = letterObj;
    xpos += 100;
    k++;
  } 
  else if (k >= line1ending.length) {
    displayAll = true;
    setTimeout(startProgram,10000);
    clearInterval(myEnding);
  }

}

function startProgram()
{
  count = 0;
  k = 0;
  displayAll = false;
  xpos = width/4+100;
  ypos = height/4;
  for (var i = 0; i < 100; i++) {
    direction = 1;//Math.floor(random(1, 9));
    x = random(50, width -50);
    y = random(50, height -50)
    number = floor(random(0, result.length));
    myW = new Word(x, y, w, h, result[number], direction);
    words[i] = myW;
  }
  letters.splice(0,letters.length);
 myEnding = setInterval(showEnding, 1000);
}