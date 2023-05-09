function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
  background('#87201C');
}

function draw() {
  // put drawing code here
  var xVal = 200;
var yVal = 300;
  fill('#0C6AF5')
  stroke(202, 145, 61);


  if(mouseIsPressed) {
    fill('#73D6FF');
    stroke('#AD691A');
    background('#000000');
    circle(1000, 500, 800);

    textSize(200);
text('Hello', 10, 1200);
fill(0, 102, 153);
text('Beautiful', 550, 1200);
fill(0, 102, 153, 51);
text('World!', 1400, 1200)

  square(mouseX, mouseY, 100);
}
else {
  ellipse(mouseX, mouseY, 100, 100)
}
}