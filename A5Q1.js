function setup() {
  createCanvas(400, 400);

  Bubble1 = new Bubble(100, 200, 30, "red");
  Bubble2 = new Bubble(125, 200, 40, "orange");
  Bubble3 = new Bubble(150, 200, 50, "yellow");
  Bubble4 = new Bubble(175, 200, 60, "green");
  Bubble5 = new Bubble(200, 200, 70, "blue");
}

function draw() {
  background(220);

  noStroke();
  Bubble1.move();
  Bubble1.show();
  Bubble2.move();
  Bubble2.show();
  Bubble3.move();
  Bubble3.show();
  Bubble4.move();
  Bubble4.show();
  Bubble5.move();
  Bubble5.show();
}

class Bubble {
  constructor(x, y, rad, color) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.color = color;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    fill(this.color); //makes them green
    ellipse(this.x, this.y, this.rad);
  }
}
