// ascii image
// ascii art range from http://paulbourke.net/dataformats/asciiart/
// hanzi art range from Greg Kreisman

let grayscale = [' ', '.',':','-','=','+','*','#','%','@']
let hanzi = ['善', '随', '俗', '若', '水', '乡', '上', '入', '。', '。','。','。', '。','。','。']
let textOut;
let capture;
let hanziImg;
let myout;
let sz =10
let vScale

 

function setup() {
  createCanvas(600,600);
  vScale = width/20
  textSize(vScale)
  capture = createCapture(VIDEO);
  capture.size(20,20)
  
  pixelDensity(1);
  background(255);
  myout = select('#output')
  textAlign(LEFT, TOP);
  drawImage();
   
   
  
  
}

function draw(){
  background(250,240,230)

  // loops through the canvas image to create the hanzi art
  capture.loadPixels(); // gets a pixes arry for video capture

  // loop through by rows  so can print lines of text
  for (let j =0; j<20; j++){
    
    for(let i =0; i<20; i++){
      // read value at image xy
      
      let index = (capture.width - i - 1 + (j * capture.width)) * 4;
      let r = capture.pixels[index + 0];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];

      let bright = floor((r + g + b) / 3) // the brightness or greyscale 0-255 is the average of the rgb
      //let gscale = floor(map(bright,0,255,0,greyscale.length-1))
      //let chridx = floor(map(col[0],0,255,10,0)); // for ascii
      //print(bright)
      let hanidx = floor(map(bright,0,255,0,hanzi.length-1))
     // let mychr = grayscale[chridx]  // for ascii
      let mychr = hanzi[hanidx];   //for chinese
      //print(hanidx, mychr)
      // draw to canvas
      fill(0)
      //noStroke();
      text(mychr,i*vScale,j*vScale)
      
    }
    
  }

}

function mouseReleased(){
  print("mouse")
   showImage();
}


function showImage(){
  // draws that frame to the canvas
  //image(capture, 0, 0,width,height);
  //filter(GRAY);
  //background(255)
  drawImage();

}

function drawImage(){
  print("bing")
  // loops through the canvas image to create the hanzi art
  capture.loadPixels(); // gets a pixes arry for video capture

   let textrow = ""
  // loop through by rows  so can print lines of text
  for (let j =0; j<20; j++){
    
    for(let i =0; i<20; i++){
      // read value at image xy
      
      let index = (capture.width - i - 1 + (j * capture.width)) * 4;
      let r = capture.pixels[index + 0];
      let g = capture.pixels[index + 1];
      let b = capture.pixels[index + 2];

      let bright = floor((r + g + b) / 3) // the brightness or greyscale 0-255 is the average of the rgb
      //let gscale = floor(map(bright,0,255,0,greyscale.length-1))
      //let chridx = floor(map(col[0],0,255,10,0)); // for ascii
      //print(bright)
      let hanidx = floor(map(bright,0,255,0,hanzi.length-1))
     // let mychr = grayscale[chridx]  // for ascii
      let mychr = hanzi[hanidx];   //for chinese
      //print(hanidx, mychr)
  
      textrow += mychr
      // draw to canvas
      //fill(col[0])
      //noStroke();
      //rect(i*sz,j*sz,sz,sz)
      
      
      
    }
    textrow += `\n`  
    
    
    
  }
   myout.html(textrow);
   createP(textrow);
   
  
}
