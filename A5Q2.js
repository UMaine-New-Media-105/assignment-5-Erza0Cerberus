function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);

  bubbles = [];
  bubbleColors = ["tomato", "coral", "khaki", "olivedrab", "steelblue"];

  for (let bubblesDrawn = 0; bubblesDrawn < 50; bubblesDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisColor = random(bubbleColors);
    let thisSize = random(0.5, 0.8);
    bubblePoints = random(4, 9);
    bubbles[bubblesDrawn] = new Bubble(thisX, thisY, thisColor, thisSize);
  }
}

function draw() {
  background("skyblue");

  for (let bubblesShown = 0; bubblesShown < bubbles.length; bubblesShown++) {
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show(5);
  }
}

class Bubble {
  constructor(x, y, hue, size) {
    this.x = x;
    this.y = y;
    this.color = hue;
    this.size = size;
  }
  move() {
    this.x = this.x + random(4, -4);
    this.y = this.y + random(4, -4);
  }
  show() {
    fill(this.color);
    ellipse(this.x, this.y, 40);
  }
}
