var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;
var width = screen.width
new_width = screen.width - 70;
new_height = screen.height - 300;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
color = "black";
width = 1;
if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e)
{
    console.log("my_touchstart");
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e)
{
    
    console.log("my_touchdown");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    lastPositionOfX = current_position_of_touch_x
    lastPositionOfY = current_position_of_touch_y;
}

canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e)
{
color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseEvent = "mousedown";
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove(e)
{
    currentPositionOfX = e.clientX-canvas.offsetLeft;
    currentPositionOfY = e.clientY-canvas.offsetTop;
    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx. moveTo(lastPositionOfX,lastPositionOfY)
        ctx.lineTo(currentPositionOfX,currentPositionOfY)
        ctx.stroke()
    }
    lastPositionOfX = currentPositionOfX;
    lastPositionOfY = currentPositionOfY;
}
function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}