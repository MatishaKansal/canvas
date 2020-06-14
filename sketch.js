var canvas;
var hcanvas, position, database;

function setup() {
  //   database = firebase.database();
  database = firebase.database();
  createCanvas(500, 500);
  canvas = createSprite(1200, 800);
  canvas.shapeColor = "lightpink";
  var canvas = database.ref("Painting canvas/position");
  canvas.on("value", readPosition, showError);
}

function draw() {
  background("white");
  // if (position !== undefined) {
  //   if (keyDown(LEFT_ARROW)) {
  //     writePosition(-1, 0);
  //   } else if (keyDown(RIGHT_ARROW)) {
  //     writePosition(1, 0);
  //   } else if (keyDown(UP_ARROW)) {
  //     writePosition(0, -1);
  //   } else if (keyDown(DOWN_ARROW)) {
  //     writePosition(0, +1);
  //   }
  // }
  drawSprites();
}

function mouseDragged() {
  line(mouseX, mouseX, mouseY, mouseY);
}

function mouseReleased() {}
// function changePosition(x, y) {
// canvas.x = canvas.x + x;
// canvas.y = canvas.y + y;
// }

function writePosition(x, y) {
  database
    .ref("Painting canvas/position")
    .set({ x: position.x + x, y: position.y + y });
}
function readPosition(data) {
  position = data.val();
  console.log(position.x);
  canvas.x = position.x;
  canvas.y = position.y;
}
function showError() {
  console.log("Error in writing to the database");
}
