p5.disableFriendlyErrors = true; // disables FES

const COMET_PERIOD = 10000;
let lastComet = Date.now();

let asteroids = [];
let comets = [];
let stars = [];
const STARS_TOTAL = 200;
const ASTEROIDS_TOTAL = 15;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("asteroidsCanvas");

  for (let i = 0; i < STARS_TOTAL; i++) {
    stars.push(new Star());
  }
  for (let i = 0; i < ASTEROIDS_TOTAL; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  passingComet();

  renderComets();

  renderStars();

  renderAsteroids();
}

function passingComet() {
  if (Date.now() - lastComet > COMET_PERIOD) {
    let isComet = random(0, 1500);
    if (isComet < 5 && comets.length == 0) {
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
    asteroids[i].rotate();
    asteroids[i].edges();
  }
}

function renderStars() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].render();
  }
}
