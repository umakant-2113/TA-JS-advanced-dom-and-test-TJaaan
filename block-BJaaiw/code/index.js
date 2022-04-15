var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// changes the ball offset to make it dynamic everytime when the createBall() will be called
let ballMoveAtX = 2;
let ballMoveAtY = -2;
let ballSize = 10;
let paddleWidth = 70;
let paddleHeight = 20;
let paddelAtX = canvas.width / 2;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;

canvas.style.backgroundColor = "#777";

let x = canvas.width / 2;
let y = canvas.height - 30;
document.addEventListener("keydown", handleKeyUp);
document.addEventListener("keyup", handleKeyDown);



// creating  the ball
function createBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballSize, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  // Creating  the paddel 
  function createPaddel() {
    ctx.beginPath();
    ctx.rect(paddelAtX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  
// handling the event  if  the keyUp event is trigerred 
function handleKeyUp(event) {
    if (event.keyCode === 39) {
      rightPressed = true;
    }
    if (event.keyCode === 37) {
      leftPressed = true;
    }
  }
  //handling the keyDown Event   is it trigerred 
  function handleKeyDown(event) {
    if (event.keyCode === 39) {
      rightPressed = false;
    }
    if (event.keyCode === 37) {
      leftPressed = false;
    }
  }
  
  
  

// To cretes Bricks  creating  a multidimensionAL array 
let bricks = [];

for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
console.log(bricks);
console.log(bricks[0]);


// Now creating the rectangles  
function createBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

// If our ball collide with the brick  then disapper the brick
function collisionDetection() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    ballMoveAtY = -ballMoveAtY;
                    b.status = 0;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                        clearInterval(interval); // Needed for Chrome to end game
                    }
                }
            }
        }
    }
}


function moveball() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createBricks();
  createBall();
  createPaddel();
  collisionDetection();

  // Now applying some codition so when the ball touches  the ball it bounces back
  if (x + ballMoveAtX > canvas.width - ballSize || x + ballMoveAtX < ballSize) {
    ballMoveAtX = -ballMoveAtX;
  }
  if (y + ballMoveAtY < ballSize) {
    ballMoveAtY = -ballMoveAtY;
  } else if (y + ballMoveAtY > canvas.height - ballSize) {
    if (x > paddelAtX && x < paddelAtX + paddleWidth) {
      ballMoveAtY = -ballMoveAtY;
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); // Needed for Chrome to end game
    }
  }

  x += ballMoveAtX;
  y += ballMoveAtY;

  // Moving  the paddel only when left or right arrow is pressed move paddel to 7 to left or right

  if (rightPressed) {
    paddelAtX += 7;
    if (paddelAtX + paddleWidth > canvas.width) {
      paddelAtX = canvas.width - paddleWidth;
    }
  }
  if (leftPressed) {
    paddelAtX -= 7;
    if (paddelAtX - paddleWidth < 0) {
      paddelAtX = 0;
    }
  }
}

//  Now calling this function in  after every 10 milisecond to  change the location of the ball in the canvas
let interval = setInterval(moveball, 10);