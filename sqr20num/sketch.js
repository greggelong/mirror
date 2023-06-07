// brightness mirror
// see notebook
// smaller capture video draw to canvas not pixel but shape or character
let myvideo;
let vScale; // global video scaling variable 
//let greyscale = [0,32,64,96,128,160,192,224,255,255,255,255,255]
let greyscale = [0,32,64,96,128,160,192,224,255]


function setup() {
  createCanvas(600, 600); // larger canvas to draw to

  vScale = width/20
  pixelDensity(1);
  myvideo = createCapture(VIDEO);
  myvideo.size(20, 20);
  // video dom element , the source, will be smaller by vScale which is 40 by 30 to improve performance
  frameRate(5);
  textAlign(LEFT, TOP);
   
}


function draw() {
  background(0);

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
      let gscale = floor(map(bright,0,255,0,greyscale.length-1))
      //print(gscale)
      // variable cindex is the index of the chineseChar

      //cindex = map(bright, 0, 255, 1, 8);

      //draw a random character on the large canvas with the brightness of each pixel on the small dom video
      fill(greyscale[gscale]);
      // we need to multply by vscale to set the place for larger video
      //textSize(vScale);
      //text(random(chiChar), x * vScale, y * vScale);
      //noStroke()
      rect(x*vScale,y*vScale, vScale,vScale)
      fill(255,0,0)
      textSize(vScale/1.5)
      text(gscale,x*vScale,y*vScale)

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
      saveCanvas('squareNum', 'jpg');
    }
    
  }