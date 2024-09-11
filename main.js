// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Functions
function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

function rect(x, y, w, h, type) {
  if (type == "fill") {
    ctx.fillRect(x, y, w, h);
  } else if (type == "stroke") {
    ctx.strokeRect(x, y, w, h);
  }
}

function line(x1, y1, x2, y2) {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

function antennae(lx1, ly1, lx2, ly2, tx1, ty1, tx2, ty2, tx3, ty3, type) {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(lx1, ly1);
  ctx.lineTo(lx2, ly2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(tx1, ty1);
  ctx.lineTo(tx2, ty2);
  ctx.lineTo(tx3, ty3);
  ctx.closePath();
  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

function buttonBlue(x1, y1, r1, x2, y2, r2) {
  ctx.fillStyle = "darkGray";
  ctx.beginPath();
  ctx.arc(x1, y1, r1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x2, y2, r2, 0, 2 * Math.PI);
  ctx.fill();
}

function buttonRed(x1, y1, r1, x2, y2, r2) {
  ctx.fillStyle = "darkGray";
  ctx.beginPath();
  ctx.arc(x1, y1, r1, 0, 2 * Math.PI);
  ctx.fill();
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x2, y2, r2, 0, 2 * Math.PI);
  ctx.fill();
}

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
rect(80, 260, 460, 80, "fill");

// Filled Triangle for Hair
triangle(180, 80, 140, 100, 220, 100, "fill");

// Filled Triangle for Hair
triangle(340, 80, 300, 100, 380, 100, "fill");

// Outlined Triangle for Hair
triangle(260, 80, 220, 100, 300, 100, "stroke");

// Outlined Triangle for Hair
triangle(420, 80, 380, 100, 460, 100, "stroke");

// Filled Triangle for Neck
triangle(300, 200, 220, 600, 380, 600, "fill");

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(100, 100, 400, 400, "fill");

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, "fill");

// Filled Circle for Right Eye Socket
circle(400, 250, 50, "fill");

// Rectangle for Mouth
rect(200, 350, 200, 60, "fill");

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 380, 400, 380);

// First Vertical Line for Teeth
line(250, 350, 250, 410);

// Second Vertical Line for Teeth
line(300, 350, 300, 410);

// Third Vertical Line for Teeth
line(350, 350, 350, 410);

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(200, 250, 30, "fill");

// Filled Circle for Right Eye
circle(400, 250, 10, "fill");

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, "stroke");

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, "stroke");

// Line for Left Eyebrow
line(150, 180, 250, 180);

// Line for Right Eyebrow
line(350, 160, 450, 180);

// Outlined Triangle for Nose
triangle(300, 280, 320, 320, 280, 320, "stroke");

// Robot Antennae
ctx.strokeStyle = "rgb(100, 100, 100)";
ctx.fillStyle = "darkGray";
antennae(530, 340, 530, 120, 525, 135, 525, 175, 555, 155, "fill");

// Robot Buttons
buttonRed(300, 527, 20, 300, 527, 15);
buttonBlue(300, 574, 20, 300, 574, 15);
