var x = []
var y = []


function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < x.length; i++) {
    x[i] = random(30, width - 30);
    y[i] = random(30, height - 30);

  }
}

function draw() {
  background(230, 230, 250);
  textSize(50);
  text("MISSION", 200, 280);
  text("ACCOMPLISHED", 105, 360);
}
