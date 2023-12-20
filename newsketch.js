
var spark=0;

function setup() {
	createCanvas(600, 600); 
}

function draw() {


background(mouseX);
  stroke(179, 192, 174);
  fill(226, 232, 208);
  textFont('Courier New');
  textSize(85);
  text('run', 78, 90);
  strokeWeight(15);

  stroke(179, 192, 174);
  fill(226, 232, 208);
  textFont('Courier New');
  textSize(40);
  text('survive', 300, 550);
  strokeWeight(15);

  strokeWeight(0);
  stroke(0, 0 ,0);
  fill(255, 255, 255);
  ellipse(400, 250, 25);

  strokeWeight(0);
  stroke(147, 71, 141);
  fill(111,158,119);
  ellipse(mouseX,mouseY,50,50);
  
  strokeWeight(15);
  stroke(88, 88, 88);
  fill(141, 141, 141);
  textFont('Courier New');
  textSize(100);
  text('help', 350, 225);

  strokeWeight(15);
  stroke(88, 88, 88);
  fill(141, 141, 141);
  textFont('Courier New');
  textSize(50);
  text('hello?', 100, 400);
  
}

