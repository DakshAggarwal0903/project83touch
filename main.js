
var oldX ,oldY;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var width = 1;
var swidth = screen.width;
var nwidth = screen.width-70;
var nheight = screen.height-300;
if(swidth<992){
document.getElementById("myCanvas").width = nwidth;
document.getElementById("myCanvas").height = nheight;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mdn);
function mdn(e){
   console.log("touchstart")
    color = document.getElementById("col").value;
    width = document.getElementById("wid").value;
    oldX = e.touches[0].clientX-canvas.offsetLeft;
    oldY = e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mde);
function mde(f){
    console.log("touchmove")
   x = f.touches[0].clientX-canvas.offsetLeft;
   y = f.touches[0].clientY-canvas.offsetTop;
      ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width;
       console.log("Last position of x coordinate: "+oldX+"and the Y coordinate: "+oldY);
       ctx.moveTo(oldX,oldY);
       console.log("New position of x coordinate: "+x+"and the Y coordinate: "+y);
       ctx.lineTo(x,y);
       ctx.stroke();
    oldX=x;
   oldY=y;
}
function wipe(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
