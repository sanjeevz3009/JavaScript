/*
 * This is index.js
 * Start by modifying the id function to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';


// draws a stick figure on the canvas
// the stick figure will stand over the point X,Y (default: 100,150)
// facing is a degree in which the stick figure is facing: 0 is to the right, 90 is towards us
function drawSpartacus(el, x, y, facing) {
  const c = el.getContext("2d");

  // set our drawing style
  c.lineWidth = 2;
  c.lineCap = "round";
  c.lineJoin = "round"
  c.strokeStyle = "#000";

  if (x == null) x = 100;
  if (y == null) y = 150;

  // the arms and the legs look the same
  drawLimbs(c, x, y)            // legs
  drawLimbs(c, x, y-40)         // arms

  // body is just a line
  line(c, x, y-40, x, y-80)     // body

  // head is a circle with eyes and a smile
  circle(c, x, y-100, 20)       // head
  drawFace(c, x, y-100, facing) // face


  // helpful functions start here
  function drawLimbs(c, x, y) {
    line(c, x-20, y, x, y-40)
    line(c, x+20, y, x, y-40)
  }

  function drawFace(c, x, y, facing) {
    // if the `facing` parameter is not given, the stick figure will face towards us
    if (facing == null) facing = 90;

    // make sure the `facing` parameter is between 0 and 360
    facing = facing % 360; // that's like the mathematical remainder after a division
    if (facing < 0) facing += 360;

    if (facing > 180) return;  // facing away from us, don't draw a face

    // we'll fake the turning of the face by shifting the eyes and the smile by an offset of up to 10 pixels
    let faceOffset = 0;
    if (facing <= 180) {
      faceOffset = (facing-90)/9;
    }

    circle(c, x-7-faceOffset, y-5, 1)  // 7 is distance from center, 5 is how high the eyes are from the head's center, 1 is eye size
    circle(c, x+7-faceOffset, y-5, 1)

    // decrease the smile size here
    const smileSize = 50; // size of smile in degrees of angle; 360 would be a full circle
    const startAngle = rad(90-smileSize/2-2*faceOffset)
    const endAngle   = rad(90+smileSize/2-2*faceOffset)
    arc(c, x-faceOffset, y, 12, startAngle, endAngle) // 12 is the radius of the smile circle
  }

  // draw a line on canvas context `c`, from point x1,y1 to point x2,y2
  function line(c, x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1,y1);
    c.lineTo(x2,y2);
    c.stroke();
  }

  // draw a circle on canvas context `c`, centered on x,y, with radius r
  // also fill the circle with white (so it's not transparent)
  function circle(c, x, y, r) {
    c.beginPath()
    c.fillStyle="#fff"
    c.arc(x, y, r, 0, 6.3, false); // 6.3 is bigger than 2π so the arc will be a whole circle
    c.fill()
    c.stroke()
  }


  // draw an arc on canvas context `c`, cenetered on x,y, with radius r, from angleStart to angleEnd
  function arc(c, x, y, r, angleStart, angleEnd) {
    c.beginPath();
    c.arc(x, y, r, angleStart, angleEnd, false)
    c.stroke();
  }

  // convert from degrees to radians
  function rad(x) {
    return x * Math.PI / 180;
  }

}

function drawLines(canvas4) {
  const ctx = canvas4.getContext('2d');

  // first line
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(500, 100);
  ctx.closePath();
  ctx.stroke();

  // second line
  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(300, 200);
  ctx.closePath();
  ctx.stroke();
}

function drawTriangle(canvas2, x1, y1, x2, y2, x3, y3) {
  const ctx = canvas2.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = "#00ff00";

  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);

  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

function drawGrid(canvas5) {
  const ctx = canvas5.getContext('2d');

  for (let i=0; i<10; i++) {
    for (let j=0; j<4; j++) {
      const x = i*50;
      const y = j*50;
      ctx.fillRect(x, y, 50, 50);
    }
  }
}

function drawCzechFlag(canvas6) {
  const ctx = canvas6.getContext('2d');

  //Dark cyan triangle
  ctx.beginPath();
  ctx.fillStyle = "#074978";
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 220);//height
  ctx.lineTo(150, 110);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  //White fucked up rectangle thing
  ctx.beginPath();
  //ctx.strokeStyle = "yellow";
  ctx.fillStyle = "white";

  ctx.moveTo(0, 0);
  ctx.lineTo(150, 110);

  ctx.lineTo(320, 110);
  ctx.lineTo(320, 0);
  //ctx.lineTo(0, 0);

  ctx.closePath();
  ctx.stroke();
  ctx.fill();


  //Reflection of white fucked up rectangle thing
  ctx.beginPath();
  //ctx.strokeStyle = "yellow";
  ctx.fillStyle = "#cc1500";

  ctx.moveTo(0, 220);
  ctx.lineTo(150, 110);

  ctx.lineTo(320, 110);
  ctx.lineTo(320, 220);
  //ctx.lineTo(0, 0);

  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

