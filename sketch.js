p5.disableFriendlyErrors = true; // disables FES

const COMET_PERIOD = 10000; 
let lastComet = Date.now();

let asteroids = [];
let comets = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("asteroidsCanvas");

  for (let i = 0; i < 20; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  passingComet();

  renderComets();

  renderAsteroids();

  showFps();
}

function passingComet() {
  if (Date.now() - lastComet > COMET_PERIOD) {
    let isComet = random(0, 1500);
    if (isComet < 5 && comets.length == 0) {
      console.log('comet!!');
      comets.push(new Comet());
      lastComet = Date.now();
    }
  }
}

function renderComets() {
  for (let i = 0; i < comets.length; i++) {
    comets[i].render();
    comets[i].update();
    let isAway = comets[i].edges();
    if (isAway) {
      comets.splice(i, 1);
    }
  }
}

function renderAsteroids() {
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
}
