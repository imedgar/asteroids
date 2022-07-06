function Comet() {
  this.direction = random(0, 100);
  this.position = createVector(
    random(windowWidth),
    this.direction < 50 ? 0 : height
  );
  this.velocity = p5.Vector.random2D();
  this.velocity.mult(5);

  this.update = function () {
    this.position.add(this.velocity);
  };

  this.render = function () {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.position.x, this.position.y);
    pop();
  };

  this.edges = function () {
    if (this.position.x > windowWidth) {
      return true;
    } else if (this.position.x < 0) {
      return true;
    }
    if (this.position.y > height) {
      return true;
    } else if (this.position.y < 0) {
      return true;
    }
    return false;
  };
}
