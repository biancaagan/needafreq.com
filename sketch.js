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

function setup() {
  createCanvas(300, 200);
  
  start = createButton('Spin');
  start.mouseClicked(() => startB = true);
  start.position(10, 10);
  
  stop = createButton('Stop');
  stop.mouseClicked(() => stopB = true);
  stop.position(60, 10);
    
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
  
  // Spin label
  if(startB == false && stopB == false){
    let num = 'Spin to shuffle';
    text(num, width/2, 150);
  } 
  
  if(startB == true){
    n1 = random(nums2);
    n2 = random(nums1);
    n3 = random(nums1);
    n4 = random(nums1);
    n5 = random(nums3);
    n6 = random(nums);
    num = 'Stop for number';
    text(num, width/2, 150);
    
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
  textSize(22);
  
  // Number blocks
  noFill();
  rect(width/2 - 105, height/2 - 35, 30, 40, 10);
  fill(0);
  text(n1, width/2 - 90, height/2 - 8);
  
  noFill();
  rect(width/2 - 70, height/2 - 35, 30, 40, 10);
  fill(0);
  text(n2, width/2 - 55, height/2 - 8);
  
  noFill();
  rect(width/2 - 35, height/2 - 35, 30, 40, 10);
  fill(0);
  text(n3, width/2 - 20, height/2 - 8);
  
  // dot
  fill(0);
  ellipse(width/2, height/2, 4, 4);
  fill(0);
  
  noFill();
  rect(width/2 + 5, height/2 - 35, 30, 40, 10);
  fill(0);
  text(n4, width/2 + 20, height/2 - 8);
  
  noFill();
  rect(width/2 + 40, height/2 - 35, 30, 40, 10);
  fill(0);
  text(n5, width/2 + 55, height/2 - 8);
  
  noFill();
  rect(width/2 + 75, height/2 - 35, 30, 40, 10);
  fill(0);
  text(n6, width/2 + 90, height/2 - 8);
}