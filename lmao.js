function setup() {
  createCanvas(10000, 1000);
}

function draw() {
	fill(mouseX, mouseY, 100);
	ellipse(mouseX, mouseY, 100, 100);
}
