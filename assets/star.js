function Star() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.size = random(0.05, 0.25);
  this.t = random(TAU);

  this.render = function () {
    push();
    this.t += 0.005;
    let scale = this.size + sin(this.t) * 2;
    noStroke();
    fill(240);
    ellipse(this.x, this.y, scale, scale);
    pop();
  };
}
