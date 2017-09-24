    var t;
var theta;



function setup() {
  createCanvas(1000, 1000);
  noStroke();
}

function draw() {
 
  var usermaxsize = document.getElementById("usermaxsize").value;
  var maxFrameCount = document.getElementById("speed").value;
  var userheight = document.getElementById("height").value;
  var userlength = document.getElementById("length").value;
  background("black");
  translate(width/2, height/2); // translate 0,0 to center

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t;

  for ( var x= -210; x <= 175; x += 25) {
    for (var y= -100; y <= 155; y += 50) {
      var offSet = 50*x+y+y;   // play with offSet to change map below
      
      var x2 = map(cos(-theta+offSet), 0, 1, 0, userlength); // map x position
      var y2 = map(cos(-theta+offSet), 0, 1, userheight, 0); // map y position
      var sz2 = map(sin(-theta+offSet),0, 1, 40 , usermaxsize); // map size of the ellipse
      fill(149-(x/2), 249+(x/6), 183-(y/2)); // color with gradient created

      ellipse(x+x2, y-y2, sz2, sz2);
    }
  }
  
}

function _(x){
  return document.getElementById(x);
}

function update(x,y){
  _(x).innerHTML = _(y).value;
}
