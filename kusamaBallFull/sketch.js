// brightness mirror
// see notebook
// smaller capture video draw to canvas not pixel but shape or character
let myvideo;
let vScale; // global video scaling variable 
//let greyscale = [0,32,64,96,128,160,192,224,255,255,255,255,255]
let greyscale = [0,32,64,96,128,160,192,224,255]

function setup() {
  createCanvas(windowWidth, windowHeight); // larger canvas to draw to

  if (width < height) {
    vScale = width / 30; // vScale tied to window width so it can work on phone and computer
    console.log("by width");

  } else {

    vScale = floor(height / 30);
    console.log("by height");
  }
  pixelDensity(1);
  myvideo = createCapture(VIDEO);
  myvideo.size(width / vScale, height / vScale);
  myvideo.hide();
  // video dom element , the source, will be smaller by vScale which is 40 by 30 to improve performance
  frameRate(5);
  ellipseMode(CORNER)
   
}


function draw() {
  background(255,255,0);

  // load the myvideo to pixel array
  myvideo.loadPixels(); // gets a pixes arry for video capture

  // loop through the small video capture  
  for (let y = 0; y < myvideo.height; y++) { // for each y there are some x's
    for (let x = 0; x < myvideo.width; x++) {

      //this mirrors the index for see note book
      let index = (myvideo.width - x - 1 + (y * myvideo.width)) * 4;
      let r = myvideo.pixels[index + 0];
      let g = myvideo.pixels[index + 1];
      let b = myvideo.pixels[index + 2];

      let bright = floor((r + g + b) / 3) // the brightness or greyscale 0-255 is the average of the rgb
      let gscale = floor(map(bright,0,255,vScale*1.2,1))
       
      //fill(random(255),random(255),random(255)); 
      fill(0);
      noStroke()
      ellipse(x*vScale,y*vScale, gscale,gscale)

    }

  }


  //console.log('bing');
  //noLoop();
}


function keyPressed() {
    // this will download the first 25 seconds of the animation!
    //if (key === 'g') {
    //  saveGif('reflection.gif', 15);
   // }
    if (key === 's') {
      saveCanvas('reflection', 'jpg');
    }
    
  }