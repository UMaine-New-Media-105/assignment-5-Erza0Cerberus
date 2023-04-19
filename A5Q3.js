let hedgehogSpeed = 3;
let flySpeed = 3;

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  colorMode(RGB, 100);

  hedgehogs = [];
  furColors = [
    "tan",
    "chocolate",
    "brown",
    "peru",
    "sienna",
    "darkgoldenrod",
    "ivory",
  ];

  flys = [];

  bubbles = [];

  for (let hedgehogsDrawn = 0; hedgehogsDrawn < 3; hedgehogsDrawn++) {
    let thisX = random(width - 190);
    let thisY = random(height - 150);
    let thisColor = random(furColors);
    let thisSize = 0.3;
    hedgehogs[hedgehogsDrawn] = new Hedgehog(thisX, thisY, thisColor, thisSize);
  }
  for (let flysDrawn = 0; flysDrawn < 5; flysDrawn++) {
    let thisX = random(width - 100);
    let thisY = random(height - 150);
    let thisSize = 0.2;
    flys[flysDrawn] = new Fly(thisX, thisY, thisSize);
  }
  for (let bubblesDrawn = 0; bubblesDrawn < 100; bubblesDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisSize = random(0.8, 1);
    bubbles[bubblesDrawn] = new Bubble(thisX, thisY, thisSize);
  }
}

function draw() {
  background("steelblue");

  for (let bubblesShown = 0; bubblesShown < bubbles.length; bubblesShown++) {
    bubbles[bubblesShown].move();
    bubbles[bubblesShown].show();
  }
  for (
    let hedgehogsShown = 0;
    hedgehogsShown < hedgehogs.length;
    hedgehogsShown++
  ) {
    hedgehogs[hedgehogsShown].move();
    hedgehogs[hedgehogsShown].show();
    hedgehogs[hedgehogsShown].update();
  }
  for (let flysShown = 0; flysShown < flys.length; flysShown++) {
    flys[flysShown].move();
    flys[flysShown].show();
    flys[flysShown].update();
  }
}

class Hedgehog {
  constructor(x, y, c, size) {
    this.x = x;
    this.y = y;
    this.addX = hedgehogSpeed;
    this.color = c;
    this.size = size;
    this.walk = 4;
    this.isWalkingLeft = false;
  }
  update() {
    let tooFarLeft = this.x > width - 190;
    let tooFarRight = this.x < 0;

    if (tooFarLeft || tooFarRight) {
      this.addX *= -1;
      this.isWalkingLeft = !this.isWalkingLeft;
    }

    this.walk = (this.walk + 1) % 5;
  }
  move() {
    this.x = this.x + this.addX;
  }
  show() {
    push();
    noStroke();
    translate(this.x, this.y);
    scale(this.size);
    push();
    translate(-71, -185);
    rotate(10);
    noStroke();
    push();
    //ears
    fill(this.color);
    ellipse(150, 80, 40, 80);
    ellipse(250, 80, 40, 80);
    pop();

    push();
    //ear insides
    fill("bisque");
    ellipse(150, 80, 20, 60);
    ellipse(250, 80, 20, 60);
    pop();

    push();
    fill(this.color);
    ellipse(200, 225, 250, 340);
    pop();

    push();
    //body
    fill("snow");
    ellipse(200, 240, 200, 280);
    pop();

    push();
    //head
    fill("snow");
    ellipse(200, 140, 150);
    pop();

    push();
    //paws
    fill("pink");
    ellipse(150, 200, 20, 35);
    ellipse(150, 300, 20, 35);
    ellipse(250, 200, 20, 35);
    ellipse(250, 300, 20, 35);
    pop();

    push();
    //tail
    fill("snow");
    ellipse(202, 380, 13, 30);
    pop();

    push();
    //eyes
    fill("black");
    ellipse(170, 100, 30, 30);
    ellipse(230, 100, 30, 30);
    pop();

    push();
    //eye lights
    fill("lightgrey");
    ellipse(160, 90, 10);
    ellipse(240, 90, 10);
    pop();

    push();
    //nose
    fill("black");
    ellipse(200, 130, 15, 15);
    pop();

    pop();
    pop();
  }
}

class Fly {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.addX = flySpeed;
    this.size = size;
  }
  update() {
    let tooFarLeft = this.x < 0;
    let tooFarRight = this.x > width - 100;

    if (tooFarLeft || tooFarRight) {
      this.addX *= -1;
    }
  }
  move() {
    this.x = this.x + this.addX;
  }
  show() {
    push();
    translate(this.x, this.y);
    scale(this.size);
    noStroke();
    push();
    fill("dimgray");
    ellipse(200, 200, 100, 100);
    pop();
    push();
    fill("white");
    ellipse(130, 160, 100, 50);
    ellipse(270, 160, 100, 50);
    pop();
    push();
    fill("black");
    ellipse(225, 200, 25, 25);
    ellipse(180, 200, 25, 25);
    pop();
    pop();
  }
}

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }
  move() {
    this.x = this.x + random(4, -4);
    this.y = this.y + random(4, -4);
  }
  show() {
    push();
    stroke("white");
    strokeWeight(1);
    noFill();
    translate(this.x, this.y);
    scale(this.size);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = this.color;
    ellipse(0, 0, 20);
    pop();
  }
}
