//global variables - can be used by anything in your sketch
let xPos = 0
let yPos = 0

//setup() only runs one time
function setup() {
  let cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent("#sketch-parent");
  background(100, 180, 120);
  myColor = color(255, 0, 0);
  //noCursor()
}

//draw() runs 60 times a second, or whatever you set framerate to.
function draw() {
  //background(100, 180, 120);
  
  fill(myColor)
  stroke(100, 180, 120)
  strokeWeight(2)
  //noStroke()
  ellipse(xPos, yPos, 50, 50)
  
  //xPos = xPos + 1;
  // the same above as below in shorthand
  xPos+=10;
  
  if(xPos > width + 25){
    xPos = -25;
    yPos = random(height);
    myColor = color(random(255), random(255), random(255))
  }
}

function windowResized(){
    resizeCanvas(innerWidth, innerHeight);
    background(100, 180, 120);
}