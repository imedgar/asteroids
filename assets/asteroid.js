function Asteroid() {
  this.position = createVector(random(windowWidth), random(windowHeight));
  this.velocity = p5.Vector.random2D();

  this.velocityModifier = random(0.3, 0.8);
  this.velocity.mult(this.velocityModifier);

  this.r = random(15, 50);

  this.vertices = float(random(5, 15));

  this.vertexOffset = [];
  for (let i = 0; i < this.vertices; i++) {
    this.vertexOffset[i] = random(-10, 10);
  }

  this.render = function () {
    push();
    stroke(73, 79, 87);
    fill(0);
    translate(this.position.x, this.position.y);
    beginShape();
    for (let i = 0; i < this.vertices; i++) {
      let angle = map(i, 0, this.vertices, 0, TWO_PI);
      let r = this.r + this.vertexOffset[i];
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
    if (this.position.y > windowHeight + this.r) {
      this.position.y = -this.r;
    } else if (this.position.y < -this.r) {
      this.position.y = windowHeight + this.r;
    }
  };
}
