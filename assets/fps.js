// Draw FPS (rounded to 2 decimal places) at the bottom left of the screen
function showFps() {
  let fps = frameRate().toFixed(2);
  if (fps < 50) {
    fill("red");
  } else {
    fill(255);
  }
  stroke(0);
  text("FPS: " + fps, 10, height - 10);
}
