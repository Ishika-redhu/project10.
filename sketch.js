var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
createCanvas(600,500);
btn_red=createButton("RED");
btn_red.position(125,100);
btn_red.mousePressed(red_bg);

btn_green=createButton("GREEN");
btn_green.position(250,100);
btn_green.mousePressed(green_bg);

btn_blue=createButton("BLUE");
btn_blue.position(375,100);
btn_blue.mousePressed(blue_bg);




}

function draw() {
background(r,g,b)}

function red_bg(){
r=204;
b=0;
g=0;
}

function green_bg(){
r=0;
b=0;
g=153;
}

function blue_bg(){
  r=51;
  b=255;
  g=51;
  }













