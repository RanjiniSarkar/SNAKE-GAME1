var snake;
var rez = 20;
var food;
var w;
var h;
var score = 0

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}

function draw() {
  scale(rez);
  background(0);
  
  snake.update();
  snake.show();
  snake.endGame();
  if (snake.endGame()) {
    print('END GAME');
    background(220);
    noLoop();
  }
  if (snake.eat(food)) {
    foodLocation();
    score = score+1;
  }
  fill("white")
  textSize(20)
  text("Score" + score, 100, 200)
  
  


  

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
  


}