function Star() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.size = random(0.025, 0.1);
  this.t = random(TAU);

  this.render = function () {
    push();
    this.t += 0.007;
    let scale = this.size + sin(this.t) * 2;
    noStroke();
    fill(255);
    ellipse(this.x, this.y, scale, scale);
    pop();
  };
}
