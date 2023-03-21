function setup(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  ctx.translate(70, 0);

  var numsAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var nums1 = [4, 5, 6, 4, 5, 6];
  var nums2 = [0, 2, 5, 7, 0, 2, 5, 7];
  var numsLast = [1, 2, 3, 4, 6, 7, 8, 9];

  var start;
  var startB = false;

  var stop;
  var stopB = false;

  var spin;
  var spinB = false;

  var randomNum;
  var n1 = 0;
  var n2 = 0;
  var n3 = 0;
  var n4 = 0;
  var n5 = 0;
  var n6 = 0;

  var count = 0;

  // Number boxes
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.roundRect(10, 10, 50, 75, 10);
  ctx.roundRect(65, 10, 50, 75, 10);
  ctx.roundRect(120, 10, 50, 75, 10);
  ctx.roundRect(190, 10, 50, 75, 10);
  ctx.roundRect(245, 10, 50, 75, 10);
  ctx.roundRect(300, 10, 50, 75, 10);
  ctx.stroke();
  ctx.closePath();

  // Dot
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.arc(180, 80, 5, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  // Numbers
  // n1 = Math.floor(Math.random() * nums1.length);
  ctx.beginPath();
  ctx.font = "50px Helvetica";
  ctx.fillText(n1, 21, 65);
  ctx.fillText(n2, 76, 65);
  ctx.fillText(n3, 131, 65);
  ctx.fillText(n4, 201, 65);
  ctx.fillText(n5, 256, 65);
  ctx.fillText(n6, 311, 65);
  ctx.closePath();
}

function spin(){
  // document.getElementById("result").innerHTML = "YOU CLICKED";
  // n1 = Math.floor(Math.random() * nums1.length);
  n1 = Math.random() * 10;

}

// function draw(){
//   var n1 = Math.floor(Math.random() * nums1.length);
// }

// setInterval(function() {
//   draw();
// }, 1);