function setup() {
  createCanvas(1000, 750);
}

function draw() {
	fill(mouseX, mouseY, 100);
	ellipse(mouseX, mouseY, 100, 100);
}
