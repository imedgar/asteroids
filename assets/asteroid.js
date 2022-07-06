function Asteroid() {
  this.position = createVector(random(windowWidth), random(height));
  this.velocity = p5.Vector.random2D();

  this.velocityModifier = random(0.5, 1.5);
  console.log(this.velocityModifier);
  this.velocity.mult(this.velocityModifier);

  this.r = random(15, 50);

  this.total = float(random(5, 15));
  this.offset = [];
  for (let i = 0; i < this.total; i++) {
    this.offset[i] = random(-10, 10);
  }

  this.render = function () {
    push();
    stroke(255);
    noFill();
    translate(this.position.x, this.position.y);
    beginShape();
    for (let i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      let r = this.r + this.offset[i];
      let x = r * cos(angle);
      let y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  };

  this.update = function () {
    this.position.add(this.velocity);
  };

  this.edges = function () {
    if (this.position.x > windowWidth + this.r) {
      this.position.x = -this.r;
    } else if (this.position.x < -this.r) {
      this.position.x = windowWidth + this.r;
    }
    if (this.position.y > height + this.r) {
      this.position.y = -this.r;
    } else if (this.position.y < -this.r) {
      this.position.y = height + this.r;
    }
  };
}
