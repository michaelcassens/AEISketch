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
var boxes;
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
  createBoxes();
}

function draw() {
  background(200);
  fill(45, 49, 120);
  textSize(100);
  boxes.bounce(boxes);
  
  for (let i = 0; i < letters.length; i++) {
    textAlign(CENTER);
    textFont(myFont);
    text(letters[i].getLetter(), letters[i].getX(), letters[i].getY());
  }

  textSize(32);
/*if(!displayAll)
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
  //  console.log(words.length + ":" + allAtTheBottom);
    if (allAtTheBottom) {
      reset();
    }
  }
}*/

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

  //all sprites bounce at the screen edges
  for(var i=0; i<allSprites.length; i++) {
    var s = allSprites[i];
    if(s.position.x<0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if(s.position.x>width) {
      s.position.x = width-1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if(s.position.y<0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if(s.position.y>height) {
      s.position.y = height-1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }
  drawSprites();
}

function reset() {
  //allAtTheBottom = 0;
  
  bottom+=15;
  count++;
 /*for (var i = 0; i < 25; i++) {
    direction = 1;//Math.floor(random(1, 9));
    x = random(50, width -50);
    y = random(50, height -50)

    number = floor(random(0, result.length));

    myW = new Word(x, y, w, h, result[number], direction);
    words.push(myW);
  }*/
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
  if(boxes != undefined)
  {
    boxes.clear();
  }

}

function startProgram()
{
  count = 0;
  k = 0;
  displayAll = false;
  bottom = 50;
  allAtTheBottom = false;
  words.splice(0,words.length);
 
  words = [];
  
  xpos = width/4+100;
  ypos = height/4;
  for (var i = 0; i < 50; i++) {
    direction = 1;//Math.floor(random(1, 9));
    x = random(50, width -50);
    y = random(50, height -50)
    number = floor(random(0, result.length));
  //  myW = new Word(x, y, w, h, result[number], direction);
  //  words.push(myW);
  }
  letters.splice(0,letters.length);
 myEnding = setInterval(showEnding, 1000);
 if(boxes != undefined)
 {
   boxes.clear();
 }
 createBoxes();
}

function createBoxes()
{
  boxes = new Group();
  
  for(var j=0; j<30; j++)
  {
    
    if(frameCount%10 == 0) {

      //create a sprite in a random position
      //assign a random appearance
      var box = createSprite(random(0, width), random(0, height));
   
      var rnd = floor(random(0, 3));
  
      if(rnd == 0)
      box.addAnimation('img', 'assets/Image1.png');
      if(rnd == 1)
      box.addAnimation('img', 'assets/Image2.png');
      if(rnd == 2)
      box.addAnimation('img', 'assets/Image3.png');
      
      //set a lifespan to avoid consuming all the memory
      box.life = 1000;
    }
    // box.addAnimation('normal', 'assets/Image1.png', 'assets/Image3.png');
   // box.life = 50;
    //setting immovable to true makes the sprite immune to bouncing and displacements
    //as if with infinite mass
    box.setCollider('rectangle', -2, 2, 66, 118);
    box.setSpeed(random(2, 3), random(0, 360));

    //scale affects the size of the collider
    box.scale = random(0.5, 1);
    //mass determines the force exchange in case of bounce
    box.mass = box.scale;
    //restitution is the dispersion of energy at each bounce
    //if = 1 the circles will bounce forever
    //if < 1 the circles will slow down
    //if > 1 the circles will accelerate until they glitch
    //circle.restitution = 0.9;

    boxes.add(box);
  }
}