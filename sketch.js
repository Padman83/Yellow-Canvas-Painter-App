function setup() {
  createCanvas(1920, 1080);
  background(290, 250, 100);
}

function draw() {
  noStroke();
  fill(150, 150, 200, 50);
  ellipse(mouseX, mouseY, 50, 50);
} 

function mousePressed() {
  background(290, 250, 100);
}
