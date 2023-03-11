let xWindow = 600;
let yWindow = 600;
let p1;
let p2;
let p3;
var tempPoint;
var points;
var randTriangle = false;

function setup() {
  createCanvas(xWindow, yWindow);  
  background(200);
  
  if (randTriangle){
    p1 = [random(0, xWindow), random(0, yWindow)];
    p2 = [random(0, xWindow), random(0, yWindow)];
    p3 = [random(0, xWindow), random(0, yWindow)];
  } else {
    p1 = [xWindow/2,0];
    p2 = [0, yWindow];
    p3 = [xWindow, yWindow];
  }
  
  points = [p1, p2, p3];
  
  
  
  strokeWeight(1);
  point(p1[0], p1[1]);
  point(p2[0], p2[1]);
  point(p3[0], p3[1]);
  
  tempPoint = [(p1[0] + p2[0])/2, (p1[1] + p2[1])/2];
  
}

function draw() {
  
  rp = floor(random(3))
  
  tempPoint[0] = (tempPoint[0] + points[rp][0])/2;
  tempPoint[1] = (tempPoint[1] + points[rp][1])/2;
  
  
  point(tempPoint[0], tempPoint[1]);
  
  
  
  
  
  
  
}
