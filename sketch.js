let x;
let Y;


function setup() {
  createCanvas(400, 400);
x = random(400);
x = int(x);
y = random(400);
y = int(y);
}
  
function draw() {
  background(220);
circle(x,y, 5);
console.log(mouseX,x);
let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 10);

  if (distancia < 3) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}
