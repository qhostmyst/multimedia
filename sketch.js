
var spark=255;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {

  background(158,111,122);
  //circle
  stroke(0,25,127);
  strokeWeight(40);
  fill(420,40,127,150);
  ellipse(0,random(height),spark,spark); 

  fill(122,spark,142,255);
  strokeWeight(20);
  stroke(28,153,163);
  rect(spark,90,30,70);
  stroke(2);
  line(20,spark,spark,175);
strokeWeight(10);
point(random(width), random(height));
noStroke(20);
ellipse(mouseX,mouseY,90, 90);

}

function mousePressed() {

    if (spark>= 150) {
      spark=0; 
    } else {
      spark=spark + 90 }
}