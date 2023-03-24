let start;
let startB = false;

let stop;
let stopB = false;

let spin;
let spinB = false;

let nums = [1, 2, 3, 4, 6, 7, 8, 9,];
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let nums2 = [4, 5, 6, 4, 5, 6];
let nums3 = [2, 5, 7, 0, 2, 5, 7, 0];


let randomNum;
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;

let count = 0;

let blockW = 80;
let blockH = 100;

function setup() {
  createCanvas(600, 300);
  
  start = createButton(" SPIN ");
  start.mouseClicked(() => startB = true);
  // start.position(width/2 - 110, 20);
  start.size(100, 60);
  start.style("font-size", "30px");
  
  stop = createButton(" STOP ");
  stop.mouseClicked(() => stopB = true);
  // stop.position(width/2 + 10, 20);
  stop.size(100, 60);
  stop.style("font-size", "30px");
    
  randomNum1 = random(nums2);
  randomNum2 = random(nums1);
  randomNum3 = random(nums1);
  randomNum4 = random(nums1);
  randomNum5 = random(nums3);
  randomNum6 = random(nums);
}


function draw() {
  background(220);
  
  fill(0);
  textFont('Comic Sans MS');
  textSize(50);
  
  // Spin label
  if(startB == false && stopB == false){
    let num = 'Spin to shuffle';
    // text(num, width/2, 300);
  } 
  
  if(startB == true){
    n1 = random(nums2);
    n2 = random(nums1);
    n3 = random(nums1);
    n4 = random(nums1);
    n5 = random(nums3);
    n6 = random(nums);
    num = 'Stop for number';
    // text(num, width/2, 300);
    
    randomNum1 = random(nums2);
    randomNum2 = random(nums1);
    randomNum3 = random(nums1);
    randomNum4 = random(nums1);
    randomNum5 = random(nums3);
    randomNum6 = random(nums);
  }
  if(stopB == true){
    startB = false;
    stopB = false;
    n1 = randomNum1;
    n2 = randomNum2;
    n3 = randomNum3;
    n4 = randomNum4;
    n5 = randomNum5;
    n6 = randomNum6;
  }


  

  textAlign(CENTER);
  textSize(80);
  
  // Number blocks
  fill(255);
  rect(width/2 - 265, height/3, blockW, blockH, 10);
  fill(0);
  text(n1, width/2 - 225, height/2 + 30);
  
  fill(255);
  rect(width/2 - 180, height/3, blockW, blockH, 10);
  fill(0);
  text(n2, width/2 - 140, height/2 + 30);
  
  fill(255);
  rect(width/2 - 95, height/3, blockW, blockH, 10);
  fill(0);
  text(n3, width/2 - 55, height/2 + 30);
  
  // dot
  fill(0);
  ellipse(width/2, height/2 + 25, 10, 10);
  fill(0);
  
  // Number blocks
  fill(255);
  rect(width/2 + 15, height/3, blockW, blockH, 10);
  fill(0);
  text(n4, width/2 + 55, height/2 + 30);
  
  fill(255);
  rect(width/2 + 100, height/3, blockW, blockH, 10);
  fill(0);
  text(n5, width/2 + 140, height/2 + 30);
  
  fill(255);
  rect(width/2 + 185, height/3, blockW, blockH, 10);
  fill(0);
  text(n6, width/2 + 225, height/2 + 30);
}