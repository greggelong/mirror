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

 

function setup() {
  createCanvas(20,32);
  capture = createCapture(VIDEO);
  capture.size(20,32)
  pixelDensity(1);
  background(255);
  myout = select('#output')
   
   
  
  
}

function mouseClicked(){
   showImage();
}


function showImage(){
  // draws that frame to the canvas
  image(capture, 0, 0,width,height);
  filter(GRAY);
  //background(255)
  drawImage();

}

function drawImage(){
  // loops through the canvas image to create the hanzi art
  
   let textrow = ""
  // loop through by rows  so can print lines of text
  for (let j =0; j<height; j++){
    
    for(let i =0; i<width; i++){
      // read value at image xy
      
      let col = get(i, j);
      //let chridx = floor(map(col[0],0,255,10,0)); // for ascii
      let hanidx = floor(map(col[0],0,255,0,hanzi.length-1))
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
