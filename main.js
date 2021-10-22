canvas = document.getElementById("myCanvas");

color = "red";
ctx = canvas.getContext("2d");
width = 2;

canvas.addEventListener("mousedown", myMousedown);

mouseEvent =  "";

function myMousedown(e){
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
}

canvas.addEventListener("mouseup", myMouseup);

function myMouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseleave);

function myMouseleave(e){
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", myMousemove);

function myMousemove(e){
    currentX = e.clientX - canvas.offsetLeft
    currentY = e.clientY - canvas.offsetTop

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(currentX, currentY);
        ctx.stroke()
    }

    lastX = currentX;
    lastY = currentY;
}

function clear1(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}